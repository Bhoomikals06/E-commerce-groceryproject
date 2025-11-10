// // // import User from "../models/user.model.js";

// // // export const updateCart = async (req, res) => {
// // //   try {
// // //     const userId = req.user;
// // //     const { cartItems } = req.body;
// // //     const updatedUser = await User.findByIdAndUpdate(
// // //       userId,
// // //       {
// // //         cartData: cartItems,
// // //       },
// // //       { new: true }
// // //     );
// // //     if (!updatedUser) {
// // //       return res.status(404).json({
// // //         message: "User not found",

// // //         success: false,
// // //       });
// // //     }

// // //     res.status(200).json({
// // //       updatedUser,
// // //       message: "Cart updated successfully",
// // //       success: true,
// // //     });
// // //   } catch (error) {
// // //     res.status(500).json({ message: "Server error", error: error.message });
// // //   }
// // // };
// // import User from "../models/user.model.js";

// // export const updateCart = async (req, res) => {
// //   try {
// //     const userId = req.user; // Provided by authUser middleware
// //     const { cartItems } = req.body;

// //     if (!userId) {
// //       return res.status(400).json({
// //         message: "User ID is required",
// //         success: false,
// //       });
// //     }

// //     const updatedUser = await User.findByIdAndUpdate(
// //       userId,
// //       { cartData: cartItems },
// //       { new: true }
// //     );

// //     if (!updatedUser) {
// //       return res.status(404).json({
// //         message: "User not found",
// //         success: false,
// //       });
// //     }

// //     res.status(200).json({
// //       updatedUser,
// //       message: "Cart updated successfully",
// //       success: true,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error", error: error.message });
// //   }
// // };
// import User from "../models/user.model.js";

// /**
//  * Updates the user's shopping cart data.
//  * The userId is extracted from the request object (attached by authUser middleware).
//  */
// export const updateCart = async (req, res) => {
//   try {
//     // req.user is expected to be the user ID set by the authUser middleware.
//     const userId = req.user;
//     // cartItems is expected to be an array or object matching the schema.
//     const { cartItems } = req.body;

//     if (!userId) {
//       // This should ideally be caught by authUser, but serves as a failsafe.
//       return res.status(401).json({
//         message: "Unauthorized: User ID is missing or invalid token.",
//         success: false,
//       });
//     }

//     // Find the user by ID and update the cartData field.
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { cartData: cartItems }, // Use the data from the request body
//       { new: true } // Return the updated document
//     );

//     if (!updatedUser) {
//       return res.status(404).json({
//         message: "User not found",
//         success: false,
//       });
//     }

//     // Success response
//     res.status(200).json({
//       updatedUser,
//       message: "Cart updated successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.error("Cart update error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
import User from "../models/user.model.js";

/**
 * Updates the user's shopping cart data.
 * The userId is extracted from the request object (attached by authUser middleware).
 */
export const updateCart = async (req, res) => {
  try {
    const userId = req.user;
    const { cartItems } = req.body;

    // --- DIAGNOSTIC LOGGING ADDED ---
    console.log("--- Cart Update Attempt ---");
    console.log("Received userId:", userId); // CRITICAL: Check if this is an ID string
    console.log("Received cartItems:", cartItems);
    // ---------------------------------

    if (!userId) {
      console.error("Authentication failed: userId is missing.");
      return res.status(401).json({
        message: "Unauthorized: User ID is missing or invalid token.",
        success: false,
      });
    }

    // Check if the User model is correctly imported before attempting a DB operation
    if (!User) {
      console.error("Mongoose User Model is not available.");
      return res.status(500).json({
        message: "Server Configuration Error: User model not found.",
        success: false,
      });
    }

    // FIX APPLIED HERE: Changed the field name from 'cart' to 'cartItems'
    // to match the database schema you provided.
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { cartItems: cartItems }, // <--- Correct field name now used!
      { new: true }
    );

    if (!updatedUser) {
      console.warn(`User with ID ${userId} not found during update.`);
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    console.log(`Cart for user ${userId} updated successfully.`);
    res.status(200).json({
      updatedUser,
      message: "Cart updated successfully",
      success: true,
    });
  } catch (error) {
    console.error("CRITICAL SERVER ERROR during cart update:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
