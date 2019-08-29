const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.get("*",(req,res)=>{
    const url=req.url.slice(1);
    console.log("Got",url);
    fetch(url).then(result=>result.text()).then(result=>res.send(result))
    // res.send("OK")
})

module.exports=router;