const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

//CREATE - POST
router.post('/', (req, res) => {
  const newCar = req.body;
  db("cars")
  .insert(newCar, "id")
  .then(ids => {
    db("cars")
    .where({ id: ids[0] })
    .first()
    .then( car => {
      res.status(200).json({ data: car })
    })
    .catch(error => {
      res.status(500).json({ message: "there was an error making the car" })
    })
  })
 
});

//READ - GET

router.get('/', (req, res) => {
  db("cars")
  .then(cars => {
    res.status(200).json(cars);
  })
  .catch(error => {
    res.status(500).json({ message: 'There was an error getting the cars', error: error.message })
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.select("*")
  .from("cars")
  .where({ id })
  .first()
  .then(car => 
    res.status(200).json({ data: car }))
  .catch(error => {
    res.status(500).json({ message: "could not the car with that id" })
  })
});


//STRETCH
//UPDATE - PUT

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("cars")
  .where({ id })
  .update(changes)
  .then( count => {
    count > 0 ? res.status(200).json({ data: count }) :
    res.status(404).json({ message: "There was no car to update" })
  })
  .catch(error => {
    res.status(500).json({ message: "Could not update the car", error: error.message })
  })
});

//DELETE - DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db("cars")
  .where({ id })
  .del()
  .then(count => {
    count > 0 ? res.status(204).json({ data: count }) :
    res.status(404).json({ message:"Car could not be deleted" })
  })
  .catch(error => {
    res.status(500).json({ message: "There was an error deleting the car", error: error.message })
  })
});


module.exports = router;