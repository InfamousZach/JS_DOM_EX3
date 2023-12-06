let displayButton = document.getElementById("addButton");
displayButton.addEventListener("click", (ev) =>
{ ev.preventDefault() 
// get data from text feild
let textIn= document.getElementById("textInput").value;
// clear text feild
document.getElementById("textInput").value = "" 
// add data from text feild 
const creative = document.createElement('li');
creative.innerText = textIn;
document.getElementById('list').appendChild(creative);}) 

