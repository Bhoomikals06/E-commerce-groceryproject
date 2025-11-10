// // import jwt from "jsonwebtoken";
// // export const authSeller = async (req, res, next) => {
// //   const { sellerToken } = req.cookies;
// //   if (!sellerToken) {
// //     return res.status(401).json({ message: "Unauthorized", success: false });
// //   }
// //   try {
// //     const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);
// //     if (decoded.email === process.env.SELLER_EMAIL) {
// //       return next();
// //     } else {
// //       return res.status(403).json({ message: "Forbidden", success: false });
// //     }
// //   } catch (error) {
// //     console.error("Error in authSeller middleware:", error);
// //     return res.status(401).json({ message: "Invalid token", success: false });
// //   }
// // };

// import jwt from "jsonwebtoken";
// export const authSeller = async (req, res, next) => {
//   try {
//     const { sellerToken } = req.cookies;
//     if (!sellerToken) {
//       return res.status(401).json({ message: "Unauthorized", success: false });
//     }
//     const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);
//     if (decoded.email === process.env.SELLER_EMAIL) {
//       return next();
//     } else {
//       return res.status(403).json({ message: "Forbidden", success: false });
//     }
//   } catch (error) {
//     console.error("Error in authSeller middleware:", error);
//     return res.status(401).json({ message: "Invalid token", success: false });
//   }
// };
// middlewares/authSeller.js (Conceptual Fix)
export const authSeller = async (req, res, next) => {
  try {
    // 1. Get and verify token (async operation)
    // 2. Find seller in DB (async operation: await Seller.findById(...))

    // If everything passes, call next()
    next();
  } catch (error) {
    // This is the CRITICAL part. If token is invalid, DB fails, etc.,
    // you MUST catch it and pass it to the global error handler.

    // If it's a known auth error, send 401
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid or expired token." });
    }

    // For all other server-side/DB errors, pass it to the global handler.
    next(error);
  }
};
