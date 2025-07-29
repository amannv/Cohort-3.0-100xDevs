
async function getRecentPost() {
    console.log("Before sending request");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
    console.log("Your data is logged");
    document.getElementById("post").innerHTML = data.body;
}
getRecentPost();
