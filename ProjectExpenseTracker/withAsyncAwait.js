

"use strict";
const button = document.getElementById("btn");
const amount = document.getElementById("amount");
const description = document.getElementById("desc");
const category = document.getElementById("category");
const form = document.getElementById("expForm");
const listDetails = document.getElementById("listDetails");


form.addEventListener("submit", onClick);
    async function onClick(e) {
        
        e.preventDefault();
        if (amount.value === "" || description.value === "") {
            alert("Please Enter All Fields");
        }
        else {
            const expenseDetails = {
                expenseAmount: amount.value,
                expenseDescription: description.value,
                expenseCategory: category.value
            }
            
            //clearing fields
            amount.value = "";
            description.value="";
            category.value="";

    try {
        
        const response = await axios.post("https://crudcrud.com/api/a9c801d1dc4b490f96c4489f6986c1d2/expenseData", expenseDetails)
            
        showDetailsOnScreen(response.data);
       
    }catch(err) {console.log(err)};

}

    }

window.addEventListener("DOMContentLoaded", async() => {

    try {

    const response = await axios.get("https://crudcrud.com/api/a9c801d1dc4b490f96c4489f6986c1d2/expenseData")
    
       if (response.status === 200) {

        for (var i = 0; i < response.data.length; i++) {
            showDetailsOnScreen(response.data[i]);
        }
       } 
        
       }catch(err) {console.log(err)}
        
    
    //console.log(response)
    
   
    
    })

function showDetailsOnScreen(expense) {
    
    const parentNode = document.getElementById("listDetails");
    const childHTML =`<li id=${expense._id}>${expense.expenseAmount} : ${expense.expenseCategory}
    : ${expense.expenseDescription}
    <button onclick=deleteUser("${expense._id}")> Delete User </button>
    <button onclick="editDetails('${expense.expenseAmount}','${expense.expenseCategory}','${ expense.expenseDescription}','${expense._id}')">Edit Details</button> </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}



// Edit user details

function editDetails(amount,category,description,userId) {


    document.getElementById("amount").value = amount;
    document.getElementById("category").value = category;
    document.getElementById("desc").value = description;
   
    deleteUser(userId);
}



// Delete User

async function deleteUser(userId) {

    try {

    const response = await axios.delete(`https://crudcrud.com/api/a9c801d1dc4b490f96c4489f6986c1d2/expenseData/${userId}`)
    
        removeUserFromScreen(userId);
    
    }catch(err) {console.log(err)};
    
}

// Remove user from screen
function removeUserFromScreen(userId) {
const parentNode = document.getElementById("listDetails");
const deleteChild = document.getElementById(userId);
if(deleteChild) {
    parentNode.removeChild(deleteChild);
 }
}

