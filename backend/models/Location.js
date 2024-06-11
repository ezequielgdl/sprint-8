const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    position: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
