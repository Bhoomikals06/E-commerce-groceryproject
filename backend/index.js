
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.route.js";
import { connectCloudinary } from "./config/cloudinary.js";
import orderRoutes from "./routes/order.route.js";
import addressRoutes from "./routes/address.route.js";
import cartRoutes from "./routes/cart.routes.js"; // ✅ Import cart routes

// // Load environment variables from .env file
dotenv.config();

 const app = express();
// const PORT = process.env.PORT || 8000;

// // Database and Cloudinary connection
connectDB();
connectCloudinary();

// // Middleware setup
const allowedOrigins = ["https://e-commerce-groceryproject-2.onrender.com"];
app.use(express.json()); // Middleware to parse JSON bodies (critical for req.body.cartItems)
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());

// // Serve static images
app.use("/images", express.static("uploads"));

// // API Routes
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes); // ✅ Use cart routes with base path /api/cart
app.use("/api/order", orderRoutes);
app.use("/api/address", addressRoutes);

// // Centralized Error-Handling Middleware (Best Practice)
app.use((err, req, res, next) => {
  console.error("Global Error Handler: ", err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});
const PORT=process.env.PORT||4000;
// // Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
