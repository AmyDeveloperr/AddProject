var form = document.getElementById("addForm");
console.log(form);
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Adding description
//var textSelect = document.querySelectorAll("")
var text = document.createElement("input");
    text.setAttribute("type", "text");
    text.className = "form-control mr-2";
    text.id = "item2";
    form.insertBefore(text, form.children[1]);

    
form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById("item").value;

    var li = document.createElement("li");
    li.className = "list-group-item";

    // li.appendChild(document.createTextNode(newItem));
    // itemList.insertBefore(li, itemList.children[0]);
    
    var text1 = document.createTextNode(newItem);
    text1.id = "text1";
    li.appendChild(text1);

    itemList.appendChild(li);

    var itemDes = document.getElementById("item2").value;
    li.appendChild(document.createTextNode(" " + itemDes));


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
    var items = itemList.getElementsByTagName("li");

    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        var itemName2 = item.childNodes[1].textContent;
        console.log(itemName);
            if (itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
    });
}