var tag = document.getElementsByTagName("li");
console.log(tag);
// tag[1].textContent = "Hello";
// tag[2].style.background = "yellow";
for (var i = 0; i < tag.length; i++) {
    tag[i].style.backgroundColor = "lightgray";
}