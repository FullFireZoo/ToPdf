import { login } from "./firebase/firebase.js";

const email = document.querySelector("#email");
const mdp = document.querySelector("#password");
const btn = document.querySelector("#connexion");

/* Listening to the click event on the button and then it is calling the login function with the email,
password and the url of the page to go to. */
btn.addEventListener("click", () => {

login (email.value, mdp.value, "../transform/transform.html")
});
