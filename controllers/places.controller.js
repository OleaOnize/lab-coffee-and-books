const mongoose = require ("mongoose");
const Place = require("../models/place.model");

module.exports.create = (req, res, next) => {
  res.render("places/create")
}

module.exports.doCreate = (req, res, next) => {
  Place.create(req.body)
  .then(() => res.redirect('/'))
  .catch(err => console.error(err))
}

module.exports.list = (req, res, next) => {
  Place.find()
  .then(places => {
    res.render("places/places", {places})
  })
}