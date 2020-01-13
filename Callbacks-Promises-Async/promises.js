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

const createPost = (post) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            const error = true;
            if (!error){
                resolve();
            } else {
                reject('Error Something went wrong');
            }
        }, 2000);
    })
};

/*createPost({Title: 'Post three', Post: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err));*/

// Async / Await
// async function init() {
//     await createPost({Title: 'Post three', Post: 'This is post three'});
//     getPosts();
// }
// init();




/*
const promise1 = Promise.resolve('Hello Hi ssss');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Bye bye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));*/



