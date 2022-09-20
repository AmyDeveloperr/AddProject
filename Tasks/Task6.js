    // var header = document.querySelector("#main-header");
    // header.style.border = "solid 10px red";

    // var input = document.querySelector("input");
    // input.value = "Hello";

    // var submit = document.querySelector('input[type = "submit"]');
    // submit.value = "send";

    // var item = document.querySelector(".list-group-item");
    // item.style.color = "red";

    var lastItem = document.querySelector(".list-group-item:last-child");
    lastItem.textContent = ""; 

    // var nthItem = document.querySelector(".list-group-item:nth-child(2)");
    // nthItem.style.backgroundColor = "green";

    // var titles = document.querySelectorAll(".title");
    // console.log(titles);
    // titles[0].textContent = "Laptop is slow";

    var changeC = document.querySelectorAll("li");
    changeC[1].style.color = "green";

    var odd = document.querySelectorAll("li:nth-child(odd)");
    for (var i = 0; i < odd.length; i++) {
        odd[i].style.backgroundColor = "green";
    }
