// Axios VS Fetch

// function main(){
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then(async response => {
//         const json = await response.json();
//         console.log(json);
//     });
// }

const axios = require("axios");

async function main(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
}

main();