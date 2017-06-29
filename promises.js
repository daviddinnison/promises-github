// Parallel Promises
let dankato = fetch('https://api.github.com/users/dankato');
let daviddinnison = fetch('https://api.github.com/users/daviddinnison');
let cklanac = fetch('https://api.github.com/users/cklanac');
let mscottcam = fetch('https://api.github.com/users/mscottcam');
let lewig = fetch('https://api.github.com/users/lewi-g');


Promise.all([dankato, daviddinnison, cklanac, mscottcam, lewig])
	.then(responses => {
		let results = responses.map( stream => stream.json() );
		console.log(results);
		return Promise.all(results); 
	}).then( results => {
		results.forEach(function(results) {
			//public repos
			console.log(results.name + " public repos: ", results.public_repos);
			return results.public_repos;
		});
	}).catch(error => {
    	console.log(error);
});