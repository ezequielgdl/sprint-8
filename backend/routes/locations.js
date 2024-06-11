const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

// Create a new location
router.post("/", async (req, res) => {
  try {
    const newLocation = new Location(req.body);
    const savedLocation = await newLocation.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all locations
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a location by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLocation = await Location.findByIdAndDelete(id);
    if (!deletedLocation) {
      return res.status(404).json({ error: "Location not found" });
    }
    res.status(200).json({ message: "Location deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
