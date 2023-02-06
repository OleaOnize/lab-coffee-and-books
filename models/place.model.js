const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["coffee shop", "bookstore"],
  }
}, 
  {
    timestamps: true
  });


  const Place = mongoose.model("Place", placeSchema);

  module.exports = Place;