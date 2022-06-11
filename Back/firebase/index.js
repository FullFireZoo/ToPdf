/* Importing the firebase-admin module. */
'use strict';
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");

/* Importing the getAuth function from the firebase-admin/auth module. */
const {getAuth} = require("firebase-admin/auth");


/* Importing the getFirestore function from the firebase-admin/firestore module. */
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");


/* Importing the firebase credentials. */
const serviceAccount = require("./fire.json");


/* Initializing the firebase app with the credentials. */
initializeApp({
  credential: cert(serviceAccount),
});


/* Getting the firestore database. */
const db = getFirestore();



/**
 * It takes a collection name as an argument, gets a reference to that collection, gets a snapshot of
 * the collection, iterates over the snapshot, and returns an array of objects with the document id and
 * data
 * @param collection - The name of the collection you want to get data from.
 * @returns An array of objects.
 */
async function getAllData(collection) {
  const refColletion = db.collection(collection);
  const snapshot = await refColletion.get();
  const data = [];
  snapshot.forEach((doc) => {
    const obj = {
      id: doc.id,
      data: doc.data(),
    };
    data.push(obj);
  });

  return data
}



/**
 * It returns the data of a document in a collection, given the collection name and the document id
 * @param collection - the name of the collection you want to get data from
 * @param id - the id of the document you want to get
 */
async function getOneData(collection, id){

  const refFirebase = db.collection(collection).doc(id);
  const doc = await refFirebase.get();
  if (!doc.exists) {
    return 'No such document!' 
  } else {
    return doc.data() 
  }


}



/**
 * It takes a collection name and content, and then adds the content to the collection
 * @param collection - The name of the collection you want to add data to.
 * @param content - The data you want to add to the collection.
 * @returns The response from the firebase database.
 */
async function setData(collection, content) {
  const firebaseResponse = await db.collection(collection).add(content);
  return firebaseResponse;
}



/**
 * It updates the data in the collection with the id and the newContent
 * @param collection - the name of the collection you want to update
 * @param id - the id of the document you want to update
 * @param newContent - This is the new content that you want to update.
 * @returns The response from the firebase update.
 */
async function updateData(collection,id, newContent){

  const firebaseRef = db.collection(collection).doc(id);
  const responseFirebase = await firebaseRef.update(newContent);
   return responseFirebase
}



/**
 * This function deletes a document from a collection in Firebase
 * @param collection - The name of the collection you want to delete from.
 * @param id - The id of the document you want to delete.
 * @returns The response from the delete request.
 */
async function deleteData(collection, id){
  const responseFirebase = await db.collection(collection).doc(id).delete();
   return responseFirebase
}


/**
 * It takes a token, sends it to Firebase, and returns the response
 * @param token - The Firebase ID token to verify.
 */
async function getToken(token){
  let response
  try {
   response = await getAuth().verifyIdToken(token)
   return response
}catch(err){

  return false
} 
  

}

async function getDataWithQuery(collection, arg, query ){
  const refColletion = db.collection(collection);
  const snapshot = await refColletion.where(arg, '==', query).get();
  const data = [];
  snapshot.forEach((doc) => {
    const obj = {
      id: doc.id,
      data: doc.data(),
    };
    data.push(obj);
  });

  return data
}



module.exports = { getAllData ,getOneData ,  setData, updateData, deleteData, getToken, getDataWithQuery};
