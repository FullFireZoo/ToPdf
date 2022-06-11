import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { gf } from "../utilitaire/fetch.js";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
import {firebaseConfig} from "./key.js"

// const firebaseConfig = {apiKey: "AIzaSyBunLGwignPVcK5jOvJ1K1NuRhKIwVjja8",
// authDomain: "topdf-20df2.firebaseapp.com",
//   databaseURL:
//     "https://topdf-20df2-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "topdf-20df2",
//   storageBucket: "topdf-20df2.appspot.com",
//   messagingSenderId: "870449331312",
//   appId: "1:870449331312:web:372213461b9e0d448a48b5",};

const link = document.getElementById("link");
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const schnizel =Date.now()
const storageRef = ref(storage, `${localStorage.getItem("uid")}/${schnizel}`);
const go = document.querySelector("button");



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

/* An event listener that listens to the click event on the button with the id "go". */
go.addEventListener("click", () => {
  console.log("ici");
  let raw = JSON.stringify({ url: link.value });
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  /* Calling the function `gf` which is defined in the file `fetch.js` and passing it three arguments. */
  gf(
    "https://us-central1-screencloud-b1e0a.cloudfunctions.net/toPdf",
    test,
    requestOptions
  );

  /* Toggling the class of the element with the class "corps" and the element with the class
  "container". */
  document.querySelector(".corps").classList.toggle('off')
  document.querySelector(".container").classList.toggle('on')
});

function test(pdf) {
 /* Creating a blob from the pdf and then creating a URL from the blob. */
  console.log("la");
  var file = new Blob([pdf], { type: "application/pdf" });
  var fileURL = URL.createObjectURL(file);
  

  /* Uploading the file to the firebase storage. */
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {},
    () => {
      /* Getting the download URL of the file uploaded to the firebase storage. */
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        localStorage.setItem("linkPdf", downloadURL);
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "title": schnizel,
  "url": downloadURL,
  "uid": localStorage.getItem("uid"),
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/pdf/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
        window.location.href = "../visualisation/visualisation.html"
      });
    }
  );
}


