const Craft = require("../models/craftModel");

exports.createCraft = async (req, res) => {
  try {
    console.log('create')
    const craft = await Craft.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        craft,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

exports.getAllCrafts = async (req, res) => {
  try {
    const craft = await Craft.find();
    res.status(200).json({
      status: "success",
      results: craft.length,
      data: {
        craft,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

exports.getCraft = async (req, res) => {
  try {
    const craft = await Craft.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        craft,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};
exports.getCraftsByEmail = async (req, res) => {
  try {
    const {user_email} = req.body;
    const craft = await Craft.find({user_email})
    res.status(200).json({
      status: "success",
      results:craft.length,
      data: {
        craft,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

exports.updateCraft = async (req, res) => {
  try {
    const craft = await Craft.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        craft,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};
exports.deleteCraft = async (req, res) => {
  try {
    const craft = await Craft.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};
