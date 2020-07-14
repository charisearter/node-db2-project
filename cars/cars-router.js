const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

//CREATE - POST
router.post('/', (req, res) => {
 
});

//READ - GET

router.get('/', (req, res) => {
  db("cars")
  .then(cars => {
    res.status(200).json(cars);
  })
  .catch(error => {
    res.status(500).json({ message: 'THere was an error getting the cars', error: error.message })
  });
});

router.get('/:id', (req, res) => {});


//STRETCH
//UPDATE - PUT

router.put('/', (req, res) => {});

//DELETE - DELETE
router.delete('/', (req, res) => {});


module.exports = router;