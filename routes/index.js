const express = require('express');
const router  = express.Router();
const placesController = require("../controllers/places.controller")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/create", placesController.create);
router.post("/create", placesController.doCreate);
router.get("/list", placesController.list)


module.exports = router;
