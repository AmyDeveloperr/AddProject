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

        //Representing objects as string: Serialization

        let seri = JSON.stringify(expenseDetails);

        //storing input data in local storage

        localStorage.setItem(expenseDetails.expenseAmount, seri);
        showDetailsOnScreen(expenseDetails);
    }

}

window.addEventListener("DOMContentLoaded", () => {
    Object.keys(localStorage).forEach((key) => {
    
        const stringifiedDetails = localStorage.getItem(key);
        const details = JSON.parse(stringifiedDetails);
        showDetailsOnScreen(details);
    })
    
    })

function showDetailsOnScreen(expense) {
    if (localStorage.getItem(expense.expenseAmount !== null)) {
        removeUserFromScreen(expense.expenseAmount);
    }
    
    const parentNode = document.getElementById("listDetails");

    const childHTML = `<li id=${expense.expenseAmount}>${expense.expenseAmount} : ${expense.expenseCategory}
    : ${expense.expenseDescription}

    <button onclick=deleteUser("${expense.expenseAmount}")> Delete User </button>
    <button onclick=editDetails("${expense.expenseAmount}","${expense.expenseCategory}","${expense.expenseDescription}")>
    Edit Details</button> </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

// Edit user details

function editDetails(amount,category,description) {
    document.getElementById("amount").value = amount;
    document.getElementById("category").value = category;
    document.getElementById("desc").value = description;
    deleteUser(amount);
}

// Delete User

function deleteUser(amount) {
    localStorage.removeItem(amount);
    removeUserFromScreen(amount);
}

// Remove user from screen
function removeUserFromScreen(amount) {
const parentNode = document.getElementById("listDetails");
const deleteChild = document.getElementById(amount);
if(deleteChild) {
    parentNode.removeChild(deleteChild);
 }
}

