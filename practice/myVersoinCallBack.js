
const arr = [
    {cart: "add items into the cart", createdAt: new Date().getSeconds()},
    {cart: "checkout from the cart", createdAt: new Date().getSeconds()}
]

let intervalId;

function cart() {

    clearInterval(intervalId);
   
    setInterval(() => {
        let output = '';
        for (let i = 0; i < arr.length; i++) {
           output += `<li>${arr[i].cart} - created ${new Date().getSeconds() - arr[i].createdAt} seconds ago </li>`;
        }
        document.body.innerHTML = output;
    },1000)
}


function emptyCart(item, callback) {
    setTimeout(() => {
        arr.push({...item, createdAt: new Date().getSeconds()});
        callback();
    },2000)
}

function signOut(item, callback) {
    setTimeout(() => {
        arr.push({...item, createdAt: new Date().getSeconds()});
        callback();
    },3000)
}

emptyCart({cart: "empty the cart"}, cart);
signOut({cart:"signout from website"},cart);
//lastEditedSecondsAgo();

var timer;
var count = 0;

function lastEditedSecondsAgo() {
    count = 0;
    clearInterval(timer);
    timer = setInterval(() => {
        count++;
        console.log(count);
    }, 5000)
}



// const arr = [
//     {cart: "add items into cart"},
//     {cart: "checkout from cart"}
    
// ]

// function cart() {
//     setTimeout(() => {

//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i].cart);
//         }
//     }, 1000)
    
// }

// function emptyCart(items) {

//     return new Promise ((res, rej) =>{

//         setTimeout(() => {

//             arr.push(items);

//             const error = true;
//             if(!error) {
//                 res();
//             } else {
//                 rej("Error: something went wrong");
//             }

            
//         },2000)
//     })   
// }

// emptyCart({cart: "Empty the cart"}).then(cart)
// .catch(err => console.log(err));
