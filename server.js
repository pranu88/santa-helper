require('dotenv').config()
const express = require('express')
const app = express()
const toysData = require('./models/toys')
const allToysData = require("./models/toy")
const mongoose = require('mongoose')
const methodOverride = require('method-override')




app.set("view engine","jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


// ----------------------------{middleware}


app.get('/',(req,res)=>{
   res.render("Home")
    // res.send("<h2>Welcome to Toys Store!</h2> <br/> <a href='/toys'>check all toys</a>")
})

app.get("/toys", (req, res) => {
    allToysData.find({}, (err, allToysData) => {
      res.render("Index", { toys: allToysData });
    });
  });



app.get("/toys/new", (req, res) => {
    res.render("New");
  });

  app.post("/toys", (req, res) => {
    allToysData.create(req.body, (err, createToy) => {
      // console.log(req.body);
      // console.log(createToy);
      res.redirect("/toys");
    });
  });
  

  app.get("/toys/:id/edit", (req, res) => {
    allToysData.findById(req.params.id, (err, foundToy) => {
      res.render("Edit", { toy: foundToy });
    });
  });
  
  app.put("/toys/:id", (req, res) => {
    allToysData.findByIdAndUpdate(req.params.id, req.body, (err, updatedToy) => {
      console.log(updatedToy);
      res.redirect(`/toys/${updatedToy._id}`);
    });
  });
  
  app.delete("/toys/:id", (req, res) => {
    allToysData.findByIdAndRemove(req.params.id, (err, data) => {
      // console.log(data);
      res.redirect("/toys");
    });
  });


  app.get("/toys/:id", (req, res) => {
    allToysData.findById(req.params.id, (err, foundToy) => {
      res.render("Show", {
        toy: foundToy,
      });
    });
  });


app.listen('3000',()=>{
    console.log("server is running in port 3000")
})