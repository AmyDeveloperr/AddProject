const posts = [
    {title: "post one", body: "This is post one", createdAt: new Date().getSeconds()},
    {title: "post two", body: "This is post two", createdAt: new Date().getSeconds()}
];

let setId = 0;
function getPosts() {
    clearInterval(setId);
    setId = setInterval(() => {
        let output = "";
        posts.forEach((post, index) => {
            output = output + `<li>${post.title} - last updated ${new Date().getSeconds() - post.createdAt} seconds ago</li>`
        })

        document.body.innerHTML = output;

    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push({...post, createdAt : new Date().getSeconds()});

            const error = false;
            if(!error) {
                resolve();
            } else {
                reject("Error: Something Went Wrong");
            }
        
        }, 4000)
    })
    
}

function deletePost() {
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            if(posts.length > 0){
                const lastElement = resolve(posts.pop());
                resolve(lastElement);
            } else {
                reject("Array is empty now")
            }
        }, 2000)
    })
}


createPost({title: "post three", body: "This is post three"})
.then(()=> {
    getPosts();
    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(() => {})
                .catch((err) => {
                    console.log("Inside catch block",err);
                }).catch(err=>console.log(err));
            }).catch(err=>console.log(err));
        }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
})
.catch(err=>console.log(err));

    


