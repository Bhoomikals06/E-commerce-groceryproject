// // // //
// // // // // import authUser from "../middlewares/authUser.js";
// // // // // import { updateCart } from "../controllers/cart.controller.js";

// // // // import { authUser } from "../middlewares/authUser.js";
// // // // import { updateCart } from "../controllers/cart.controller.js";

// // // // router.post("/update", authUser, updateCart);

// // // // export default router;

// // // import express from "express";
// // // const router = express.Router();
// // // const cartController = require("../controllers/cart.controller.js");

// // // router.post("/update", cartController.updateCart);

// // // module.exports = router;
// // // routes/cart.routes.js
// // import express from "express";
// // const router = express.Router();

// // // 🎯 FIX 3: Use ES Module imports
// // import { updateCart } from "../controllers/cart.controller.js";
// // // 🎯 FIX 4: Import your authentication middleware (assuming its path)
// // import { authUser } from "../middlewares/authUser.js";

// // // The base path is /api/cart (from server.js)
// // // This route becomes POST /api/cart/update
// // router.post("/update", authUser, updateCart);

// // // 🎯 FIX 5: Use ES Module export
// // export default router;
// import express from "express";
// import { updateCart } from "../controllers/cart.controller.js";
// import { authUser } from "../middlewares/authUser.js"; // Adjust path if needed

// const router = express.Router();

// // POST /api/cart/update
// router.post("/update", authUser, updateCart);

// export default router;
import express from "express";
import { updateCart } from "../controllers/cart.controller.js";
// Assuming authUser is the correct path for your middleware
import { authUser } from "../middlewares/authUser.js";

const router = express.Router();
// Route: POST /api/cart/update
// It requires the user to be authenticated via the authUser middleware
router.post("/update", authUser, updateCart);

export default router;
