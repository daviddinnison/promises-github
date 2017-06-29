$.getJSON('https://api.github.com/users/Thinkful/repos', data => {
    // Waits until you have the response from GitHub then this code is run
});

// GitHub doesn't need to respond before your code advances to here; it's asynchronous



fetch('https://api.github.com/users/Thinkful/repos').then(response => {
    // Waits until you have the response from GitHub then this code is run
});