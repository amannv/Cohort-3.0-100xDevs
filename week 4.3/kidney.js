const express = require("express");
const app = express();


const users = [{
    Name: "Aman",
    Kidneys: [{
        Healthy: false
    },
    {
        Healthy: true
    }]    
}];


app.get("/kidneys", function(req, res){
    const AmanKidneys = users[0].Kidneys;
    const NumberofKidneys = AmanKidneys.length;
    let numberofHealthyKidneys = 0;
    for ( let i=0; i<AmanKidneys.length; i++) {
        if (AmanKidneys[i].Healthy) {
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }
    const numberofUnhealthyKidneys = NumberofKidneys - numberofHealthyKidneys;
    res.json({
        NumberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    });
});

app.use(express.json());


app.post("/addkidney", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push({
        Healthy: isHealthy
    })
    res.json({
       msg: "Done!"
    })
});

app.put("/changekidney", function(req, res) {
    for (let i=0; i<users[0].Kidneys.length; i++) {
        users[0].Kidneys[i].Healthy = true; 
    }
    res.json({msg: "done"});
})

app.delete("/removekidney", function(req, res) {
    const newKidneys = [];
    for (let i=0; i<users[0].kidneys[i].length; i++) {
        if (users[0].kidneys[i].Healthy) {
            newKidneys.push({
                Healthy: true
            })
        }
    }
    user[0].kidneys = newKidneys;
    res.json({msg: "Done!"}) 
})

app.listen(8080);