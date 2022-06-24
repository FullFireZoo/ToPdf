import { gfj } from "../utilitaire/fetch.js";
import { doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
let dataB = []


gfj("http://localhost:3000/api/v1/pdf", callPdf)

function callPdf(data){
  document.querySelector("ul").innerHTML = ""
    dataB = data
    for(let i=0; i<data.length; i++){
        if(data[i].data.uid == localStorage.getItem("uid"))
        {document.querySelector("ul").innerHTML += 
        `<li>
            <h3 contenteditable="true" class="nom">${data[i].data.title}</h3>
                <div class="icon">
                    <img src="./image/téléchargement.png" alt="save" class="save" data-id="${data[i].id}">
                    <a href="${data[i].data.url}" target="_blank"><img src="./image/vue.png" alt="vue"></a>
                    <a href="${data[i].data.url}" download="test.pdf"><img src="./image/dwn.png" alt="dwn"></a>
                    <img src="./image/dlt.png" alt="dlt" class="delete" data-id="${data[i].id}">
                </div>
        </li>`}
    }

}


document.querySelector("body").addEventListener("click",(e)=>{
    if(e.target.className == "delete"){ 
    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3000/api/v1/pdf/${e.target.getAttribute("data-id")}`, requestOptions)
      .then(response => response.text())
      .then(result => location.reload())
      .catch(error => console.log('error', error));}
})

document.querySelector("body").addEventListener("click",(e)=>{
    if(e.target.className == "save"){ 
    var raw = "";
      
    var raw = JSON.stringify({
        
        "title": e.target.parentNode.parentNode.textContent.replace(/\n /g,"").trim()
        
      });

    var requestOptions = {
      method: 'PUT',
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3000/api/v1/pdf/${e.target.getAttribute("data-id")}`, requestOptions)
      .then(response => response.text())
      .then(result => location.reload())
      .catch(error => console.log('error', error));}
})



document.querySelector('#searchBar').addEventListener('keyup',()=>{

let input = document.querySelector('#searchBar').value;
input = input.toLowerCase();

const filter = dataB.filter((doc) =>{
  console.log(doc.data.title);
  return doc.data.title.toLowerCase().includes(input)
})

console.log(filter);
callPdf(filter)
})