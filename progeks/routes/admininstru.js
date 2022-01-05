var express = require('express');
var router = express.Router();
const instrumentDB = require('../model/instrumentDB');

router.post('/', async(req, res) => {
    let note ={
        navn: req.body.navnForm,
        pris: req.body.prisForm,
        forhandler: req.body.forhandlerForm,
        lokation: req.body.lokationForm
    };
    try{
    const item = await instrumentDB.create(note);
    console.log(item)
    
    res.redirect('http://localhost:3000/api.html');
    res.status(200).json();
    } catch(error){
        console.log(error)
        }
    });
    
    module.exports = router;




