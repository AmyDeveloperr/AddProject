
const form = document.getElementById("addForm");

const itemList = document.getElementById("items");

const textBox = document.getElementById("item");

const filter = document.getElementById("filter");

//const subButton = document.getElementById("submit");




// inserting description text box
const desc = document.createElement("input");




desc.setAttribute("type", "text");

desc.id = "description";

desc.className = "form-control mr-2";

form.appendChild(desc);

form.insertBefore(desc, form.children[1]);



const textBox2 = document.getElementById("description");




//filter event

filter.addEventListener("keyup", filterItems);

function filterItems(e) {
    //convert into lowercase

    const text = e.target.value.toLowerCase();

    //getting all li in list
    
   const items =  itemList.getElementsByTagName("li");

    //convert HTML collection to Array

   Array.from(items).forEach(function(item){

    const itemName = item.firstChild.textContent;
    const itemName2 = item.childNodes[1].textContent;

            if (itemName.toLowerCase().indexOf(text) !== -1 || itemName2.toLowerCase().indexOf(text) !== -1) {

                item.style.display = "block";
            
            } else {
                item.style.display = "none";
            }
    })
}

// Form Submit Event

form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

itemList.addEventListener("click", editItem);

function editItem(e) {
    if(e.target.classList.contains("edit")) {
        const li = e.target.parentElement;

            const editText = li.firstChild.textContent;
            const editText2 = li.childNodes[1].textContent;
            itemList.removeChild(li);
            textBox.value = editText;
            textBox2.value = editText2;
       
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

    const newItem = document.getElementById("item");

    const newBox = document.getElementById("description");

    

    // create element li

    const li = document.createElement("li");

    li.className ="list-group-item";

    // Add text node with input value

   li.appendChild(document.createTextNode(newItem.value + " "));

   itemList.appendChild(li);
   
   li.appendChild(document.createTextNode(newBox.value));
    

   
    newItem.value="";
    newBox.value="";

    // create delete button element

    const delButton = document.createElement("button");

    // Add classes to delete button

    delButton.className = "btn btn-danger btn-sm float-right delete";

    delButton.appendChild(document.createTextNode("X"));

    li.appendChild(delButton);

    

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



