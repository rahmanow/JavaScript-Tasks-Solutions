const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
}

xhr.open('GET', url);
xhr.send();





////// Requests 2

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = url + queryParams + wordQuery;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
        xhr.open('GET', endpoint);
        xhr.send();
    }
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    };
    getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


/// Requests 4
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value;
    const topicQuery = topicField.value;
    const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    }

    xhr.open('GET', endpoint);
    xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
