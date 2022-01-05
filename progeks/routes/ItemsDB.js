var express = require('express');
var router = express.Router();
const mongo = require('../model/instrumentDB');

router.get("/", async (req,res) => {
    const allItemsInDb = await mongo.find({});

    res.status(200).json({allItemsInDb});
});

module.exports = router;
