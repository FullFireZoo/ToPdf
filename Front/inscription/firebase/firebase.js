import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";


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

export function createUser(email, password, url) {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    localStorage.setItem("user", user.uid)
    window.location.href = url
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error");
    // ..
  })};

