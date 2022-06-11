let pdf = localStorage.getItem("linkPdf")

/* Adding the pdf to the page. */
document.querySelector(".window").innerHTML += ` <iframe src="${pdf}" width="80%" height="650px"> </iframe>`