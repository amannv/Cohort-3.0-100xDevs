const express = require("express");

const app = express();

function sum(n) {
    let ans = 0;
    for (let i=1; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = sum(n);
    console.log("your answer is"  + ans);
});

app.listen(5000, () => {
    console.log("port is running on port 5000")
});