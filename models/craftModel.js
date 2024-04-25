const mongoose = require("mongoose");

const craftSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
    item_name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    subcategory_name: {
      type: String,
      required: true,
      trim: true,
    },
    short_description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    customization: {
      type: String,
      required: true,
      trim: true,
    },
    processing_time: {
      type: String,
      required: true,
      trim: true,
    },
    stock_status: {
      type: String,
      required: true,
      trim: true,
    },
    user_email: {
      type: String,
      required: true,
      trim: true,
    },
    user_name: {
      type: String,
      required: true,
      trim: true,
    },
    add_button: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Craft = mongoose.model("Craft", craftSchema);

module.exports = Craft;
