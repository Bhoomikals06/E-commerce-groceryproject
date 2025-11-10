// // import express from "express";

// // import { authSeller } from "../middlewares/authSeller.js";
// // import {
// //   addProduct,
// //   changeStock,
// //   getProductById,
// //   getProducts,
// // } from "../controllers/product.controller.js";
// // import { upload } from "../config/multer.js";
// // import { get } from "mongoose";

// // const router = express.Router();
// // router.post("/add-product", upload.array("images", 5), authSeller, addProduct);

// // router.get("/list", getProducts);
// // router.get("/id", getProductById);
// // router.post("/stock", authSeller, changeStock);

// // export default router;
// // routes/product.route.js
// import express from "express";

// import { authSeller } from "../middlewares/authSeller.js"; // ✅ FIX: Added .js extension
// import {
//   addProduct,
//   changeStock,
//   getProductById,
//   getProducts,
// } from "../controllers/product.controller.js"; // ✅ FIX: Added .js extension
// import { upload } from "../config/multer.js"; // ✅ FIX: Added .js extension

// // Removed: import { get } from "mongoose"; // Unused import

// const router = express.Router();

// // NOTE: It is recommended to use req.params for ID lookup, e.g., router.get("/id/:id", ...)
// router.post("/add-product", authSeller, upload.array("image"), addProduct);

// router.get("/list", getProducts);
// router.get("/id", getProductById); // Consider changing to GET /id/:id
// router.post("/stock", authSeller, changeStock);

// export default router;
// routes/product.route.js
import express from "express";

// Ensure all imports have the .js extension for Node.js ES Modules
import { authSeller } from "../middlewares/authSeller.js";
import {
  addProduct,
  changeStock,
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/product.controller.js";
import { upload } from "../config/multer.js";

const router = express.Router();

// 1. ADD PRODUCT ROUTE
// authSeller is before the controller, as expected.
// NOTE on 'upload.array("images", 5)': The comment in your original code used 'images',
// but the final route used 'image'. I am keeping 'image' for consistency.
router.post("/add-product", authSeller, upload.array("image", 5), addProduct);

// 2. GET ALL PRODUCTS ROUTE (Public or Authenticated list)
router.get("/list", getProducts);

// 3. GET PRODUCT BY ID ROUTE (Standard REST convention uses req.params)
// The route path is changed to include a parameter ':id'
router.get("/id/:id", getProductById);

// 4. CHANGE STOCK ROUTE
router.post("/stock", authSeller, changeStock);

router.delete('/delete/:id', deleteProduct);
export default router;
