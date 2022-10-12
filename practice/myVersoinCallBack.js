
const arr = [
    {cart: "add items into the cart", createdAt: new Date().getSeconds()},
    {cart: "checkout from the cart", createdAt: new Date().getSeconds()}
]

function cart() {
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            console.log(`${arr[i].cart} - created ${new Date().getSeconds() - arr[i].createdAt} seconds ago`);
        }
    },1000)
}


function emptyCart(item) {
    setTimeout(() => {
        arr.push({...item, createdAt: new Date().getSeconds()});
        //callback();
    },2000)
}

function signOut(out, callback) {
    setTimeout(() => {
        arr.push({...out, createdAt: new Date().getSeconds()});
        callback();
    },3000)
}

emptyCart({cart: "empty the cart"});
signOut({cart:"signout from website"},cart);





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
