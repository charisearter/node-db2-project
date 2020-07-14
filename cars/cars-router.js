const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

//CREATE - POST
router.post('/', (req, res) => {});

//READ - GET

router.get('/', (req, res) => {});

router.get('/:id', (req, res) => {});


//STRETCH
//UPDATE - PUT

router.put('/', (req, res) => {});

//DELETE - DELETE
router.delete('/', (req, res) => {});


module.exports = router;