
const ul = document.querySelector(".users");
const btn = document.querySelector(".btn");
const myForm = document.querySelector(".my-form");
const nameInput = document.querySelector(".text1");
const email = document.querySelector(".text2");

// ul.firstElementChild.innerHTML = "<h1> Hello </h1>";
// ul.lastElementChild.innerHTML = "<h1> Practice </h1>";
// ul.children[1].style.background = "yellow";
// ul.children[1].innerHTML = "<h1> Lets Go </h1>";

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(".my-form").style.background ="lightsalmon";
// })

btn.addEventListener("mouseover", (e) => {
    e.preventDefault();
    btn.style.background = "gray";
})

btn.addEventListener("mouseout", (e) => {
    e.preventDefault();
    document.querySelector(".my-form").style.background ="lightpink";
})

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === "" || email.value === "") {
        alert("Please Enter All Fields");
    } else {
        const li = document.createElement("li");
        const appendC = document.createTextNode(`${nameInput.value} : ${email.value}`);
        li.appendChild(appendC);
        ul.appendChild(li);
        // li.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`));
        // ul.appendChild(li);

        nameInput.value="";
        email.value="";


    }
}