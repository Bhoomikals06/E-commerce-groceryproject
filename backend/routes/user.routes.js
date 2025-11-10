// import express from "express";
// import {
//   registerUser,
//   loginUser,
//   logout,
//   checkAuth,
// } from "../controllers/user.controller.js";
// // import {
// //   //   checkAuth,
// //   //   loginUser,
// //   //   logout,
// //   registerUser,
// // } from "../controller/user.controller.js";
// import { authUser } from "../middlewares/authUser.js";
// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/is-auth", authUser, checkAuth);
// router.get("/logout", authUser, logout);
// // router.get("/logout", logout);

// export default router;
// routes/user.routes.js
import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  checkAuth,
} from "../controllers/user.controller.js"; // ✅ FIX: Added .js extension
import { authUser } from "../middlewares/authUser.js"; // ✅ FIX: Added .js extension

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/is-auth", authUser, checkAuth);
router.get("/logout", authUser, logout);

export default router;
