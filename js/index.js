// Examine the document object
// console.dir(document);
// console.log(document.title);
// document.title = "AmyDeveloper";
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all[14]);
// //document.all[10].textContent="Hello";
// console.log(document.forms);
// console.log(document.links);

var headerTitle = document.getElementById("header-title");
console.log(headerTitle);
//headerTitle.textContent = "Hello";
headerTitle.innerText = "Lunch is ready";
headerTitle.style.borderBottom = "solid 5px black";
const cFont = document.querySelector(".title");
cFont.style.color = "green";
cFont.style.fontWeight= "bold";
