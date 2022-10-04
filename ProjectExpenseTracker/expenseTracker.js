"use strict";
const button = document.getElementById("btn");
const amount = document.getElementById("amount");
const description = document.getElementById("desc");
const category = document.getElementById("category");
const form = document.getElementById("expForm");
const listDetails = document.getElementById("listDetails");


form.addEventListener("submit", onClick);

function onClick(e) {
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

        
       axios.post("https://crudcrud.com/api/1b23e0d0b13549e9b278e5f446b07d98/expenseData", expenseDetails)
       .then((response) => {
        console.log(response);
        showDetailsOnScreen(response.data);
        //console.log(response)
    })
       .catch((err) => console.log(err))


        // //Representing objects as string: Serialization

        // let seri = JSON.stringify(expenseDetails);

        // //storing input data in local storage

        // localStorage.setItem(expenseDetails.expenseAmount, seri);
        // showDetailsOnScreen(expenseDetails);
    }

}

window.addEventListener("DOMContentLoaded", () => {

    axios.get("https://crudcrud.com/api/1b23e0d0b13549e9b278e5f446b07d98/expenseData")
    .then((response) => {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            showDetailsOnScreen(response.data[i]);
        }
    
    //console.log(response)
    })
    .catch((err) => console.log(err))
    //})


    // Object.keys(localStorage).forEach((key) => {
    
    //     const stringifiedDetails = localStorage.getItem(key);
    //     const details = JSON.parse(stringifiedDetails);
    //     showDetailsOnScreen(details);
    // })
    
    })

function showDetailsOnScreen(expense) {
    if (localStorage.getItem(expense.expenseAmount !== null)) {
        removeUserFromScreen(expense.expenseAmount);
    }
    
    const parentNode = document.getElementById("listDetails");

    const childHTML = `<li id=${expense._id}>${expense.expenseAmount} : ${expense.expenseCategory}
    : ${expense.expenseDescription}

    <button onclick=deleteUser("${expense._id}")> Delete User </button>
    <button onclick=editDetails("${expense.expenseAmount}","${expense.expenseCategory}","${expense.expenseDescription}","${expense._id}")>
    Edit Details</button> </li>`;
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

function deleteUser(userId) {

    axios.delete(`https://crudcrud.com/api/1b23e0d0b13549e9b278e5f446b07d98/expenseData/${userId}`)
    .then((response) => {
        removeUserFromScreen(userId);
     //showUsersOnScreen(response.data);
     //console.log(response)
 })
    .catch((err) => console.log(err))



    //localStorage.removeItem(amount);
    //removeUserFromScreen(amount);
}

// Remove user from screen
function removeUserFromScreen(userId) {
const parentNode = document.getElementById("listDetails");
const deleteChild = document.getElementById(userId);
if(deleteChild) {
    parentNode.removeChild(deleteChild);
 }
}

