let posts=[
    {body: 'Example 1'},
    {body: 'Example 2'}
];
function getPosts() {
    setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
        output += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
    },2000);
}

function cretePost(post, callback) {
    setTimeout(()=>{
        posts.push(post);
        callback();
    },4000);
    }


createPost({body: 'Example 3' }, getPosts);


