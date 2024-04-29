const { default: mongoose } = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    subcategory_name: {
      type: String,
      unique: true,
    },
      image: {
      type: String,
    },
  },
  { timeStamps: true, versionKey: false }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
