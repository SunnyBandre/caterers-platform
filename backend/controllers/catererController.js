const Caterer = require("../models/Caterer");

exports.getCaterers = async (req, res) => {
  try {
    const caterers = await Caterer.find();

    res.status(200).json(caterers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getCatererById = async (req, res) => {
  try {
    const caterer = await Caterer.findById(req.params.id);

    if (!caterer) {
      return res.status(404).json({
        message: "Caterer not found",
      });
    }

    res.status(200).json(caterer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createCaterer = async (req, res) => {
  try {
    const { name, location, pricePerPlate, cuisines, rating } = req.body;

    if (!name || !location || !pricePerPlate || !cuisines || !rating) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const caterer = await Caterer.create({
      name,
      location,
      pricePerPlate,
      cuisines,
      rating,
    });

    res.status(201).json(caterer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
