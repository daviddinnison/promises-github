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

// - Make a call to GitHub API for your account
fetch('https://api.github.com/users/dankato').then((response) => {
    console.log('First request has completed');
    console.log(response);
  //  throw ('i gots errors, dont forget me on line 25')
    if(!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
})
// - Console log the “name” and the number of followers
.then((data) => {
    console.log('Second request has completed');
    console.log(`My name is ${data.name} and i have ${data.followers} follower(s).`);
})

// - Open github and compare the Name and number of followers, do they match?
// https://api.github.com/users/dankato
// "followers": 1,
// "name": "danielkato",
// they match 


// Add a .catch() to the promise
.catch(error => {
    console.log(error);
});

// - Purposely create an error in your code, like changing the `return data.json()` to `return data.josn()`
// error thrown on line 25


// - Check out the error in the browser
// => 'i gots errors, dont forget me on line 25'

// - Next, add the following catch to your fetch().then() chain
// added .catch on line 25



















