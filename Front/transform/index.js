import {gf} from '../utilitaire/fetch.js'

const go = document.querySelector("button")
const link = document.getElementById("link")

var myHeaders = new Headers(); 
myHeaders.append("Content-Type", "application/json");

go.addEventListener('click',() =>{
    console.log("ici");
let raw = JSON.stringify({   "url": link.value });
let requestOptions = {   method: 'POST',   headers: myHeaders,   body: raw,   redirect: 'follow' };
gf( "https://us-central1-screencloud-b1e0a.cloudfunctions.net/toPdf", test, requestOptions)
})

function test(pdf){
    console.log("la");
    var file = new Blob([pdf], {type: 'application/pdf'});
    var fileURL = URL.createObjectURL(file);
    document.querySelector("body").innerHTML += `<object data="${fileURL}.pdf" type="application/pdf" width="600" height="800">   <a href="${fileURL}.pdf">test.pdf</a> </object>`;
    // window.open(fileURL);
    
}