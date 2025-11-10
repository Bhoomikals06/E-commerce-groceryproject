// import express from "express";
// import {
//   isAuthSeller,
//   sellerLogin,
//   sellerLogout,
// } from "../controllers/seller.controller.js";
// import { authSeller } from "../middlewares/authSeller.js";
// // import { sellerLogin } from "../controllers/seller.controller.js";
// const router = express.Router();

// router.post("/login", sellerLogin);
// router.get("/is-auth", authSeller, isAuthSeller);
// router.get("/logout", authSeller, sellerLogout);

// export default router;
// routes/seller.routes.js
import express from "express";
import {
  isAuthSeller,
  sellerLogin,
  sellerLogout,
} from "../controllers/seller.controller.js"; // ✅ FIX: Added .js extension
import { authSeller } from "../middlewares/authSeller.js"; // ✅ FIX: Added .js extension

const router = express.Router();
router.post("/login", sellerLogin);
router.get("/is-auth", authSeller, isAuthSeller);
router.get("/logout", authSeller, sellerLogout);

export default router;
