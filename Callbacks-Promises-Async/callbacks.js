const posts = [
    {Title: 'Title one', Post: 'This is post one'},
    {Title: 'Title two', Post: 'This is post two'},
];

const getPosts = () => {
    setTimeout(()=> {
        let output = '';
        posts.forEach((post, index)=>{
            output += post.Title;
        })
         console.log(output);
    }, 1000);
}

const createPost = (post, callback) =>{
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({Title: 'Title three', Post: 'This is post three'}, getPosts);