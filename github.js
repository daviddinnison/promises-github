$.getJSON('https://api.github.com/users/Thinkful/repos', data => {
    // Waits until you have the response from GitHub then this code is run
});

// GitHub doesn't need to respond before your code advances to here; it's asynchronous

fetch('https://api.github.com/users/Thinkful/repos').then(response => {
    // Waits until you have the response from GitHub then this code is run
});

/* Test URLS
https://api.github.com/users/dankato
https://api.github.com/users/daviddinnison
https://api.github.com/users/cklanac
https://api.github.com/users/mscottcam
https://api.github.com/users/lewi-g
*/

// Single Fetch Call with .then()
fetch('https://api.github.com/users/dankato').then(() => {
    console.log('First request has completed');
    return fetch('http://example.com/second-endpoint');
})
.then(() => {
    console.log('Second request has completed');
});



// Add a .catch() to the promise

// 