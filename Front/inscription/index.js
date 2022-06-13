import { createUser } from "./firebase/firebase.js";

const email = document.querySelector("#email");
const mdp = document.querySelector("#password");
const btn = document.querySelector("#subscribe");

/* Listening to the click event on the button and then it is calling the login function with the email,
password and the url of the page to go to. */
btn.addEventListener("click", () => {

createUser(email.value, mdp.value, "../connexion/connexion.html")
});