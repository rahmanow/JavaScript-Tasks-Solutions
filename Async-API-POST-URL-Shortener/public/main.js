/*
Review Requests II
Let’s recap on the concepts covered in the previous exercises:

GET and POST requests can be created a variety of ways.

Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively.

Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.

fetch() is a web API that can be used to create requests. fetch() will return promises.

We can chain .then() methods to handle promises returned by fetch().

The .json() method converts a returned promise to a JSON object.

async is a keyword that is used to create functions that will return promises.

await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.

await can only be used within functions declared with async.

Instructions
Congratulations on learning all about AJAX requests using fetch(), async, and await! These concepts are fundamental and will help you develop more robust web apps!

Play around the with browser and code to make GET and POST requests. If you’re going to make POST requests, make sure you assign apiKey your Rebrandly API key and run the code!

If you want to challenge yourself:

Rewrite the requests from scratch.
Replace the helper methods with your own code.
Use different APIs to make GET/POST requests using async/await.
 */




// information to reach API
const apiKey = '6f31a83b08c9492382173cb2905f3ef1';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async() => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
            }
        });
        if(response.ok) {
            const jsonResponse = await response.json();
            //renderRawResponse(jsonResponse);
            renderResponse(jsonResponse);
        }
    }
    catch(error) {
        console.log(error);
    }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
