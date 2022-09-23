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
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //storing user data in object  format
        const userDetails = {
            Name: nameInput.value,
            Email: emailInput.value
        }

       

        //Representing objects as string->serialization

        let seri = JSON.stringify(userDetails);

        //storing data in local storage
        localStorage.setItem("userDetails", seri);
        

        let deseri = JSON.parse(localStorage.getItem("userDetails"));
        console.log(deseri);

        // localStorage.getItem("userDetails", deseri);

        // localStorage.setItem("Email", seri);

        //clearing fields
        nameInput.value = "";
        emailInput.value = "";

        

    }
}