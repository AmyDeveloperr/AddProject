 

 console.log("person 1 shows ticket");
 console.log("person 2 shows ticket");

 // Execution with async await

 const preMovie = async () => {
    const promiseTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve("tickets"),3000);
    })

    const getPopcorn = new Promise((resolve, reject)=> resolve("popcorn"));

    const getButter = new Promise((resolve, reject) => resolve("butter"));

    const getColdDrinks = new Promise((resolve, reject) => resolve("cold drinks"));

    let gotTicket = await promiseTicket;

    console.log(`Wife: Here are ${gotTicket}`)
    console.log("Husband: We should go in");
    console.log("Wife: No, I am hungry");

    let gotPopcorn = await getPopcorn;

    console.log(`Husband: I got the ${gotPopcorn}`)
    console.log("Husband: We shuld go in");
    console.log("I need butter");

    let gotButter = await getButter;

    console.log("Husband: This is your butter");
    console.log("Wife: We are getting late for the movie");
    console.log("Husband: Oh !! are you sure we are going to watch the movie!!");

    let gotColdDrinks = await getColdDrinks;
    console.log("Wife: I need cold drinks");
    console.log("Husband: Really!!!");

    return gotTicket;
 }

 preMovie().then((m) =>console.log(`person 3 shows ${m}`));


 //Execution with promise
 
//  const promiseTicket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("ticket");
//     }, 3000)
//  })

//  const getPopcorn = promiseTicket.then((t) =>{
//     console.log("Wife: Here are tickets")
//     console.log("Husband: We should go in");
//     console.log("Wife: No, I am hungry");
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
//  })

//  const getButter = getPopcorn.then((t) => {
//     console.log("Husband: I got the popcorn")
//     console.log("Husband: We shuld go in");
//     console.log("I need butter");
//     return new Promise((resolve, reject) => resolve(`${t} butter`));
//  })

//  const getColdDrinks = getButter.then((t) => {
//     console.log("Wife: I need cold drinks");
//     console.log("Husband: OMG!! Okay I will get it");
//     return new Promise((resolve, reject) => resolve(`${t} cold drinks`));
//  });

console.log("person 4 shows ticket");
console.log("person 5 shows ticket");