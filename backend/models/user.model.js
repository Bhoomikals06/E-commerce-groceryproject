// import mongoose from "mongoose";
// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     cartItems: { type: Object, default: {} },
//   },
//   { minimize: false }
// );

// const User = mongoose.model("User", userSchema);
// export default User;

// models/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // The type: Object is fine, but Map is generally safer for dynamic keys
    cartItems: { type: Object, default: {} },
  },
  { minimize: false, timestamps: true } // Added timestamps for completeness
);

const User = mongoose.model("User", userSchema);
export default User;
