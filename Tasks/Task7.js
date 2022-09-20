//var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "yellow";
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "yellow";
// console.log(itemList.parentElement.parentElement.parentElement);
//console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = "skyblue";
// console.log(itemList.firstElementChild); 


//  console.log(itemList.lastElementChild);
//  itemList.lastElementChild.textContent = "HelloBro";

//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

var newDiv = document.createElement("div");
 
newDiv.className = "Hello";
newDiv.id = "newDiv";
newDiv.setAttribute("title", "Hello Div");

var newDivText = document.createTextNode("Hello World");
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
console.log(newDiv);
container.insertBefore(newDiv, h1); 

newDiv.style.fontSize = "30px";