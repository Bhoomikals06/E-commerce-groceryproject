// import React, { useContext, useEffect, useState } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const AddAddress = () => {
//   const [address, setAddress] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "",
//     phone: "",
//   });
//   //   const { axios, user, navigate } = useContext(AppContext);
//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   const submitHanlder = async (e) => {
//     try {
//       e.preventDefault();
//       console.log("address", address);
//       const { data } = await axios.post("/api/address/add", { address });
//       console.log("data", data);
//       if (data.success) {
//         toast.success(data.message);
//         navigate("/cart");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   useEffect(() => {
//     if (!user) {
//       navigate("/cart");
//     }
//   }, []);
//   return (
//     <div className="mt-12 flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
//       {/* Left Side: Address Fields */}
//       <div className="flex-1 bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">
//           Address Details
//         </h2>
//         <form
//           onSubmit={submitHanlder}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <div>
//             <label className="block text-gray-600">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={address.firstName}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={address.lastName}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="col-span-2">
//             <label className="block text-gray-600">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={address.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="col-span-2">
//             <label className="block text-gray-600">Street</label>
//             <input
//               type="text"
//               name="street"
//               value={address.street}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600">City</label>
//             <input
//               type="text"
//               name="city"
//               value={address.city}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600">State</label>
//             <input
//               type="text"
//               name="state"
//               value={address.state}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600">Zip Code</label>
//             <input
//               type="number"
//               name="zipCode"
//               value={address.zipCode}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600">Country</label>
//             <input
//               type="text"
//               name="country"
//               value={address.country}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="col-span-2">
//             <label className="block text-gray-600">Phone</label>
//             <input
//               type="number"
//               name="phone"
//               value={address.phone}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="col-span-2">
//             <button
//               type="submit"
//               className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md"
//             >
//               Save Address
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Right Side: Image */}
//       <div className="flex-1 flex items-center justify-center">
//         <img
//           src={assets.add_address_iamge}
//           alt="Address Illustration"
//           className="w-full max-w-xs rounded-lg shadow-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default AddAddress;
import React, { useContext, useEffect, useState } from "react";
// Reverting to the most common relative path.
// If this fails again, you MUST adjust these two lines manually
// to match your file structure (e.g., use "../../" or a path alias like "@/assets/assets").
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  // Destructuring the required values from the context
  const { axios, user, navigate } = useContext(AppContext);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const submitHanlder = async (e) => {
    try {
      e.preventDefault();
      console.log("address", address);

      // Ensure axios and user exist before trying to submit
      if (!axios || !user) {
        toast.error("Please log in to add an address.");
        navigate("/cart");
        return;
      }

      const { data } = await axios.post("/api/address/add", { address });
      console.log("data", data);

      if (data.success) {
        toast.success(data.message);
        // Navigate back to cart or checkout page after successful address save
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // In case of network error or server down
      toast.error(error.message || "Failed to connect to the server.");
    }
  };

  useEffect(() => {
    // This redirect ensures only logged-in users can access the address page.
    // We check for 'user' to be null/undefined to trigger the redirect
    if (user === null) {
      navigate("/cart");
    }
    // Dependency array ensures this runs when 'user' or 'navigate' changes
  }, [user, navigate]);

  // Prevent rendering the form if user is not logged in (to avoid flashing content)
  if (user === null) {
    return null;
  }

  return (
    <div className="mt-12 flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Left Side: Address Fields */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">
          Shipping Address Details
        </h2>
        <form
          onSubmit={submitHanlder}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={address.firstName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={address.lastName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={address.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              State/Province
            </label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Zip Code
            </label>
            <input
              type="text"
              // changed type to 'text' as 'number' type often has unexpected behavior with leading zeros or length constraints
              name="zipCode"
              value={address.zipCode}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text" // changed type to 'text' for flexibility with phone formatting
              name="phone"
              value={address.phone}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="col-span-2 pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
            >
              Save and Continue to Payment
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-0">
        <img
          src={assets.add_address_iamge}
          alt="Address Illustration"
          className="w-full max-w-xs object-contain rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default AddAddress;
