



const arr = [
    {cart: "add items into cart", createdAt: new Date().getSeconds()},
    {cart: "checkout from cart", createdAt: new Date().getSeconds()}
    
]

function cart() {
    setTimeout(() => {

        let output = '';
        for (let i = 0; i < arr.length; i++) {
           output += `<li>${arr[i].cart} - created ${new Date().getSeconds() - arr[i].createdAt} seconds ago </li>`;
        }
        document.body.innerHTML = output;
    }, 1000)    
    
}

function emptyCart(items) {

    return new Promise ((res, rej) =>{

        setTimeout(() => {

            arr.push({...items, createdAt: new Date().getSeconds()});

            const error = false;
            if(!error) {
                res();
            } else {
                rej("Error: something went wrong");
            }

            
        },1000)
    })   
}

function signOut(items) {

    return new Promise ((res, rej) =>{

        setTimeout(() => {

            arr.push({...items, createdAt: new Date().getSeconds()});

            const error = false;
            if(!error) {
                res();
            } else {
                rej("Error: something went wrong");
            }

            
        },1000)
    })   

}

function deletePost() {
    return new Promise ((res, rej) => {
        
        setTimeout(() => {
            if (arr.length > 0) {
                const lastElement = res(arr.pop());
                res(lastElement);
            } else {
                rej("Array is empty now")
            }
            
        },1000)
        
    })
}

cart();

async function display() {
    try {
        await emptyCart({cart: 'Empty the cart'});
        cart();
        await signOut({cart: 'sign out from the cart'});
        cart();
        await deletePost();
        cart();
        await deletePost();
        cart();
        await deletePost();
        cart();
        await deletePost();
        cart();
    }catch(err) {
        console.log(err);
    }
}

display();




// emptyCart({cart: "Empty the cart"})
// .then(()=> {
//     signOut({cart:'sign out from cart'}).then(() => {
//      cart();
//     deletePost().then(() => {
//         cart();
//         deletePost().then(() => {
//             cart()
//             deletePost().then(() => {
//                 cart();
//             deletePost().then(() => {
//                 cart();
//             }).catch(err => console.log(err));
//         }).catch(err => console.log(err));
//         }).catch(err => console.log(err));
//     }).catch(err => console.log(err));
// }).catch(err => console.log(err));
//     }).catch(err => console.log(err));
    
