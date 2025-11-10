// // import mongoose from "mongoose";
// // const productSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true,
// //   },
// //   description: {
// //     type: Array,
// //     required: true,
// //   },
// //   price: {
// //     type: Number,
// //     required: true,
// //   },
// //   offerPrice: {
// //     type: Number,
// //     required: true,
// //   },
// //   image: {
// //     type: Array,
// //     required: true,
// //   },
// //   category: {
// //     type: String,
// //     required: true,
// //   },
// //   inStock: {
// //     type: Boolean,
// //     required: true,
// //     default: true,
// //   },
// // });

// // const Product = mongoose.model("Product", productSchema);
// // export default Product;

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   // IMPROVEMENT: Specify that the array contains Strings
//   description: {
//     type: [String], // Array of Strings
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   offerPrice: {
//     type: Number,
//     required: true,
//   },
//   // IMPROVEMENT: Specify that the array contains Strings (for image URLs/paths)
//   image: {
//     type: [String], // Array of Strings
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   inStock: {
//     type: Boolean,
//     // 'required: true' is redundant when 'default: true' is set.
//     default: true,
//   },
// });

// const Product = mongoose.model("Product", productSchema);
// export default Product;
// models/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: Array, // Array of Strings
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offerPrice: {
      type: Number,
      required: true,
    },
    image: {
      type: Array, // Array of Strings
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
