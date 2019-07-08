const express=require("express");
const router=express.Router();

const countries=[
    {country:"Poland",capital:"Warsaw"},
    {country:"United Kingdom",capital:"London"},
    {country:"France",capital:"Paris"},
    {country:"Bulgaria",capital:"Sofia"},
    {country:"Germany",capital:"Berlin"},
    {country:"Italy",capital:"Rome"},
]

router.get("/countries",(req,res)=>{
    res.json(countries)
})

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Echo server' });
  });

module.exports=router;
