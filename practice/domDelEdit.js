
const form = document.getElementById("addForm");

const itemList = document.getElementById("items");

const textBox = document.getElementById("item");

// Form Submit Event

form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

itemList.addEventListener("click", editItem);

function editItem(e) {
    if(e.target.classList.contains("edit")) {
        const li = e.target.parentElement;
        const editText = li.firstChild.textContent;
        itemList.removeChild(li);
        textBox.value = editText;
       

    }
}

function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        if (confirm("Are You Sure?")) {
            const li = e.target.parentElement;
            
            itemList.removeChild(li);
        }
    }
}

function addItem(e) {
    e.preventDefault();
    
    //Get input value

    newItem = document.getElementById("item");

    

    // create element li

    const li = document.createElement("li");

    li.className ="list-group-item";

    // Add text node with input value

    li.appendChild(document.createTextNode(newItem.value));

   
    newItem.value="";


    // create delete button element

    const delButton = document.createElement("button");

    // Add classes to delete button

    delButton.className = "btn btn-danger btn-sm float-right delete";

    delButton.appendChild(document.createTextNode("X"));

    li.appendChild(delButton);

    itemList.appendChild(li);

     // Adding Edit button

const editBtn = document.createElement("button");

editBtn.className = "btn btn-danger btn-sm float-right edit";

editBtn.appendChild(document.createTextNode("Edit"));

li.appendChild(editBtn);

}

// Addding Edit button for items

const li = document.getElementsByClassName("list-group-item");

for (let i = 0; i < li.length; i++) {

    const edit = document.createElement("button");

    edit.className = "btn btn-danger btn-sm float-right edit";

    edit.appendChild(document.createTextNode("Edit"));
    

    li[i].appendChild(edit);

    
}



