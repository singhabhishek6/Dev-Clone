const express = require('express');

//import controller 
const CrudController = require('../controllers/crud.controller');

// import models
const hastag = require('../models/hastag.model');

//express router
const router = express.Router();

//post new tag using post request
router.post('', CrudController.post(hastag));

//get all hastag data
router.get('', CrudController.getAll(hastag));

//update single data
router.patch('/:id', CrudController.updateOne(hastag));

//delete single data
router.delete('/:id', CrudController.deleteOne(hastag));

module.exports = router;
