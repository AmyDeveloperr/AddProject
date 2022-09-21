var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");



form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById("item").value;

    var li = document.createElement("li");
    li.className = "list-group-item";

    // li.appendChild(document.createTextNode(newItem));
    // itemList.insertBefore(li, itemList.children[0]);
    
    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li);

    var delButton = document.createElement("button");

    delButton.className = "btn btn-danger btn-sm float-right delete";

    delButton.appendChild(document.createTextNode("X"));

    li.appendChild(delButton);
} 

var li = document.querySelectorAll(".list-group-item");

for (var i = 0; i < li.length; i++) {

    var edit = document.createElement("button");
    edit.appendChild(document.createTextNode("Edit"));
    edit.className = " btn-sm float-right edit";
    li[i].appendChild(edit);

}








itemList.addEventListener("click", removeItem);

function removeItem(e) {
    if(e.target.classList.contains("delete")) {
       if (confirm("Are You Sure?")) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}

filter.addEventListener("keyup", filterItems);

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    console.log(text);
    var items = itemList.getElementsByTagName("li");

    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        console.log(itemName);

            if (itemName.toLowerCase().indexOf(text) != -1) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
    });
}