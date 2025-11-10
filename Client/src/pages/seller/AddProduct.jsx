// import { useState } from "react";
// import { assets, categories } from "../../assets/assets";
// import { useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import toast from "react-hot-toast";

// const AddProduct = () => {
//   const { axios } = useContext(AppContext);
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   const handleSubmit = async (e) => {
//     // e.preventDefault();
//     try {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("offerPrice", offerPrice);
//       formData.append("category", category);

//       for (let i = 0; i < files.length; i++) {
//         formData.append("image", files[i]);
//       }
//       const { data } = await axios.post("/api/product/add-product", formData);
//       if (data.success) {
//         toast.success(data.message);
//         setName(""),
//           setDescription(""),
//           setPrice(""),
//           setOfferPrice(""),
//           setCategory(""),
//           setFiles([]);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(data.message);
//     }
//   };

//   return (
//     <div className="py-10 flex flex-col justify-between bg-white">
//       <form className="md:p-10 p-4 space-y-5 max-w-lg">
//         <div>
//           <p className="text-base font-medium">Product Image</p>
//           <div className="flex flex-wrap items-center gap-3 mt-2">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label key={index} htmlFor={`image${index}`}>
//                   <input
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                     accept="image/*"
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                   />
//                   <img
//                     className="max-w-24 cursor-pointer"
//                     src={
//                       files[index]
//                         ? URL.createObjectURL(files[index])
//                         : assets.upload_area
//                     }
//                     alt="uploadArea"
//                     width={100}
//                     height={100}
//                   />
//                 </label>
//               ))}
//           </div>
//         </div>
//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-name">
//             Product Name
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Type here"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//             required
//           />
//         </div>
//         <div className="flex flex-col gap-1 max-w-md">
//           <label
//             className="text-base font-medium"
//             htmlFor="product-description"
//           >
//             Product Description
//           </label>
//           <textarea
//             id="product-description"
//             onChange={(e) => setDescription(e.target.value)}
//             rows={4}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
//             placeholder="Type here"
//           ></textarea>
//         </div>
//         <div className="w-full flex flex-col gap-1">
//           <label className="text-base font-medium" htmlFor="category">
//             Category
//           </label>
//           <select
//             onChange={(e) => setCategory(e.target.value)}
//             id="category"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//           >
//             <option value="">Select Category</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category.path}>
//                 {category.path}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex items-center gap-5 flex-wrap">
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="product-price">
//               Product Price
//             </label>
//             <input
//               onChange={(e) => setPrice(e.target.value)}
//               id="product-price"
//               type="number"
//               placeholder="0"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="offer-price">
//               Offer Price
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               placeholder="0"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//         </div>
//         <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };
// export default AddProduct;
import { useContext, useState } from "react";
import { assets, categories } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { axios } = useContext(AppContext);
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // <-- Crucial: Prevents the default form submission/page reload
    try {
      e.preventDefault();
      // 1. Basic validation (optional but recommended)
      if (!name || !description || !price || !category || files.length === 0) {
        toast.error(
          "Please fill in all required fields and upload at least one image."
        );
        return;
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      // Ensure price and offerPrice are handled correctly (e.g., as numbers or strings as expected by your backend)
      formData.append("price", price);
      formData.append("offerPrice", offerPrice);
      formData.append("category", category);

      // Append all selected image files
      for (let i = 0; i < files.length; i++) {
        // Only append files that are actually present (not 'undefined' from the sparse array)
        if (files[i]) {
          formData.append("image", files[i]);
        }
      }

      const { data } = await axios.post("/api/product/add-product", formData);

      if (data.success) {
        toast.success(data.message);
        // Clear all states on successful submission
        setName("");
        setFiles([]); // Change from setFiles("") to setFiles([])
        setDescription("");
        setPrice("");
        setCategory("");
        setOfferPrice("");

        // **Optional:** Programmatically reset the form if you want to clear input field values not controlled by state
        // You'll typically need to use 'value' and 'ref' for better control, but clearing state usually suffices.
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Error adding product:", error);
      // Display a user-friendly error message
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "An error occurred while adding the product."
      );
    }
  };

  return (
    <div className="py-10 flex flex-col justify-between bg-white">
      {/* CORRECTION 1: Attach handleSubmit to the form's onSubmit event */}
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }}
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  <img
                    className="max-w-24 cursor-pointer"
                    src={
                      files[index]
                        ? URL.createObjectURL(files[index])
                        : assets.upload_area
                    }
                    alt="uploadArea"
                    width={100}
                    height={100}
                  />
                </label>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            value={name} // Add value prop for controlled component
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            value={description} // Add value prop
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>
          <select
            value={category} // Add value prop
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.path}>
                {category.path}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <input
              value={price} // Add value prop
              onChange={(e) => setPrice(e.target.value)}
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              // CORRECTION 2: Add onChange handler to update offerPrice state
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice} // Add value prop
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
        </div>
        {/* The button is of type="submit" by default, which is correct */}
        <button
          type="submit"
          className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
