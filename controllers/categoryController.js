const Category = require("../models/categoryModel");
const Craft = require("../models/craftModel");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      status: "success",
      results:categories.length,
      data: {
        categories,
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
exports.createCategory = async (req, res) => {
  try {
    const { subcategory_name } = req.body;
    const exists = await Category.find({ subcategory_name });
    console.log(exists);
    if (exists.length) throw new Error("subcategory_name already exists!");
    console.log(exists);
    if (!exists.length) {
      const category = await Category.create(req.body);
      console.log(req.body);
      res.status(201).json({
        status: "success",
        data: {
          category,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};
exports.getCraftByCategory = async (req, res) => {
  try {
    const { name } = req.params;

    const craft = await Craft.find({ subcategory_name: name });
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
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
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

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        category,
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
