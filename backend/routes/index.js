const express = require('express');
const router = new express.Router();
const getAllPokemon = require('../service/indexService.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  getAllPokemon().then((response)=>{
    res.json(response.data);
  }).catch(function(error) {
    console.log(error);
  });
});

module.exports = router;
