New Instructions:

New Fetch/Promises Instructions:

Single Fetch Call with .then()

- Make a call to GitHub API for your account like:

    https://api.github.com/users/cklanac

    `https://api.github.com/users/${username}`

- Console log the “name” and the number of followers
- Open github and compare the Name and number of followers, do they match?

Add a .catch() to the promise
The Promise API requires that you handle errors. If your code has an error and you have not handled it properly, you will get the following error:
    Uncaught (in promise) ReferenceError: ...
    
- Purposely create an error in your code, like changing the `return data.json()` to `return data.josn()`

- Check out the error in the browser
- Next, add the following catch to your fetch().then() chain
    catch( err => console.error(err) );

Parallel Promises
Save your previous code and start a fresh script. Make 3 fetch calls to the GitHub API, like:
    
    const lewig = fetch(‘https://api.github.com/users/lewi-g’);
    const mscottcam = fetch(‘https://api.github.com/users/mscottcam’);
    const daviddinnison = fetch(‘https://api.github.com/users/daviddinnison’);

Use Promise.all() to handle the responses.  And console.log the number of public_repos for each user. Note you, will need to use the Array.map trick we demo’ed in the workshop
    
    return Promise.all(resultsArray.map((prom) => prom.json()));