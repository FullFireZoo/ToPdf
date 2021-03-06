import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, getIdToken,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBunLGwignPVcK5jOvJ1K1NuRhKIwVjja8",
  authDomain: "topdf-20df2.firebaseapp.com",
  databaseURL: "https://topdf-20df2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "topdf-20df2",
  storageBucket: "topdf-20df2.appspot.com",
  messagingSenderId: "870449331312",
  appId: "1:870449331312:web:372213461b9e0d448a48b5"}


const app = initializeApp(firebaseConfig);



const auth = getAuth();

/**
 * It logs in the user with the email and password provided.
 * @param email - The email address of the user.
 * @param password - The user's password.
 * @param url - the url you want to redirect to after login
 */
export function login (email, password, url) {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    getToken.then((token) => {
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("token", token);
      document.location.href = url
    })
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error");
  })};

  
/**
 * It signs out the user and redirects to the url passed as a parameter
 * @param url - The URL to redirect to after the user has signed out.
 */
export function deconnexion(url) {
    signOut(auth)
      .then(() => {
        document.location.href = url
      })
      .catch((error) => {
        // An error happened.
      });
  }

  export const getToken = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const {
          currentUser
        } = auth;
        const token = await getIdToken(currentUser, true);
  
        resolve(token);
      }
    });
  });

