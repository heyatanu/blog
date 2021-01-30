const express = require('express')
const app = express()
const port = 3000

const bodyParser= require("body-parser");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

var blogtitle=[];
var blogdis=[];
var date=[];



app.get('/', (req, res) =>{
  
    var today =new Date();
    var options={
        weekday :"long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US",options);
    
    res.render("list",{kindofday: day , newblogtitle: blogtitle, newblogdis:blogdis,blogdate:date});

    

})
app.get('/submitblog', (req, res) =>{
    
    var today =new Date();
    var options={
        weekday :"long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("submitblog",{kindofday: day });

})


app.post('/', (req,res) =>{

    var itemtitle= req.body.newitemtitle;
    var itemdis= req.body.newitemdis;
    var newdate =req.body.newitemdate;
    blogtitle.push(itemtitle);
    blogdis.push(itemdis);
    date.push(newdate);
    res.redirect("/");
    
    });
    
    




app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})