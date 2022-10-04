const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === "" || emailInput.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please Enter All Fields";
        setTimeout(() => msg.remove(), 4000);
    } else {
        // const li = document.createElement("li");
        // li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // userList.appendChild(li);

        //storing user data in object  format
        const userDetails = {
            Name: nameInput.value,
            Email: emailInput.value
        }

       //clearing fields

       nameInput.value = "";
       emailInput.value = ""; 

       axios.post("https://crudcrud.com/api/9fb9b97a259a4e288bc91fae4c12a7d5/appointmentData", userDetails)
       .then((response) => {
        showUsersOnScreen(response.data);
        //console.log(response)
    })
       .catch((err) => console.log(err))

        //Representing objects as string->serialization

        // let seri = JSON.stringify(userDetails);

        // //storing all input data in local storage
        // localStorage.setItem(userDetails.Email , seri);

        // showUsersOnScreen(userDetails);
    }
}

window.addEventListener("DOMContentLoaded", () => {
// Object.keys(localStorage).forEach((key) => {

//     const stringifiedDetails = localStorage.getItem(key);
//     const details = JSON.parse(stringifiedDetails);
    axios.get("https://crudcrud.com/api/9fb9b97a259a4e288bc91fae4c12a7d5/appointmentData")
    .then((response) => {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            showUsersOnScreen(response.data[i]);
        }
    
    //console.log(response)
    })
    .catch((err) => console.log(err))
    //})

})

function showUsersOnScreen(user) {
    // if (localStorage.getItem(user.Email) !== null) {
    //     removeUserFromScreen(user.Email);
    // }
const parentNode=document.getElementById("users");
const childHTML=`<li id=${user._id}> ${user.Name} : ${user.Email} 
<button onclick=deleteUser("${user._id}")> Delete User </button> 
<button onclick=editDetails("${user._id}","${user.Name}")>Edit Details </button>
</li>`;
parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit user details

function editDetails(email,name) {


    document.getElementById("email").value = email;
    document.getElementById("name").value = name;
    deleteUser(email);
}

//Delete user

function deleteUser(userId) {

    axios.delete(`https://crudcrud.com/api/9fb9b97a259a4e288bc91fae4c12a7d5/appointmentData/${userId}`)
    .then((response) => {
        removeUserFromScreen(userId);
     //showUsersOnScreen(response.data);
     //console.log(response)
 })
    .catch((err) => console.log(err))

    //localStorage.removeItem(emailId);
    //removeUserFromScreen(emailId);
}

function removeUserFromScreen(userId) {
    const parentNode = document.getElementById('users');
    const deleteChild = document.getElementById(userId);
        if (deleteChild) {
    parentNode.removeChild(deleteChild);
 }
}
