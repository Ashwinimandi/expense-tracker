
const Posts = [
    { title : 'post one' , body : 'this is post one'},
    { title : 'post two' , body : 'this is post two'}
];
function getPosts(){
    setTimeout(() => {
        let output = ' ';
        Posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}
function createPost(post){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            Posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject("error: something went wrong");
            }
        },1000);
    })
}

function deletePost(){
    return new Promise((resolve , reject) => {
        if(Posts.length > 0){
            setTimeout(() => {
                resolve();
            }, 1000);
        }else{
             reject("error: Array is empty");
        }
    })
}

const timerId = setInterval(() => {
    deletePost()
    .then(() => {
        Posts.pop();
        let lastPost = document.querySelector('body').lastChild;
        lastPost.parentNode.removeChild(lastPost);
    })
    .catch(err =>{
        console.log(err);
        clearInterval(timerId);
    });
}, 2000);

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'goodbye'));
const promise5 = new createPost({title:'post three', body:'this is post three'}).then(getPosts).catch(err => console.log(err));
//const promise4 = new updateLastUserActivityTime
Promise.all([promise1,promise2,promise3,promise5]).then((values) => console.log(values));