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

function create4thPost(post, callback) {
    setTimeout(()=>{
        posts.push({...post, createdAt : new Date().getSeconds()});
        callback();
    }, 4000)
}

getPosts();
create4thPost({title: "post three", body: "This is post three"}, getPosts);
create4thPost({title: "post four", body: "This is post four"}, getPosts);