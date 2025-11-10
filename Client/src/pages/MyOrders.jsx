// // import React, { useEffect, useState } from "react";
// // import { dummyOrders } from "../assets/assets";

// // const MyOrders = () => {
// //   const [myOrders, setMyOrders] = useState([]);

// //   const fetchOrders = async () => {
// //     // In a real application, you'd fetch data from an API here.
// //     setMyOrders(dummyOrders);
// //   };

// //   useEffect(() => {
// //     // FIX 2: Added empty dependency array [] to run only on mount
// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="mt-12 pb-16">
// //       <div>
// //         <p className="text-2xl font-medium md:text-3xl"> My-orders</p>
// //       </div>
// //       {myOrders.map((order, index) => (
// //         <div
// //           key={index}
// //           className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
// //         >
// //           <p className="flex justify-between items-center gap-6">
// //             <span>Order Id:{order._id}</span>
// //             <span> Payment:{order.paymentType}</span>
// //             <span> TotalAmount:{order.amount}</span>
// //           </p>
// //           {/* FIX 1: Changed 'order.item' to 'order.items' (plural) */}
// //           {order.items.map((item, itemIndex) => (
// //             <div
// //               key={itemIndex} // Changed key name for clarity
// //               className={`relative bg-white text-gray-800/70 ${
// //                 order.items.length !== itemIndex + 1 && "border-b"
// //               } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}
// //             >
// //               <div className="flex items-center mb-4 md:mb-0">
// //                 <div className="p-4 rounded-lg">
// //                   <img
// //                     src={item.product.image[0]}
// //                     alt=""
// //                     className="w-16 h-16"
// //                   />
// //                 </div>

// //                 <div className="ml-4">
// //                   <h2 className="text-xl font-medium">{item.product.name}</h2>
// //                   <p>${item.product.category}</p>
// //                 </div>
// //               </div>
// //               <div className="text-lg font-medium">
// //                 <p>Quantity:{item.quantity || "1"}</p>
// //                 <p>Status:{order.status}</p>
// //                 {/* Ensure order.createdAt exists before calling new Date() */}
// //                 <p>
// //                   Date:
// //                   {order.createdAt
// //                     ? new Date(order.createdAt).toLocaleString()
// //                     : "N/A"}
// //                 </p>
// //               </div>
// //               <p className="text-lg">
// //                 Amount:$
// //                 {item.product.offerPrice * item.quantity}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       ))}
// //       {/* Optional: Handle the case where there are no orders */}
// //       {myOrders.length === 0 && (
// //         <p className="text-center text-gray-500 mt-8">No past orders found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyOrders;
// // MyOrders.jsx
// import React, { useContext, useEffect, useState } from "react";
// import { dummyOrders } from "../assets/assets";
// import { AppContext } from "../context/AppContext";

// const MyOrders = () => {
//   const [myOrders, setMyOrders] = useState([]);
//   const { axios, user } = useContext(AppContext);

//   const fetchOrders = async () => {
//     // In a real application, you'd fetch data from an API here.
//     setMyOrders(dummyOrders);
//     try {
//       const { data } = await axios.get("/api/order/user");
//       console.log("data", data);
//       if (data.succes) {
//         setMyOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//     s;
//   };

//   useEffect(() => {
//     // FIX 2: Added empty dependency array [] to run only on mount
//     //
//     if (user) {
//       fetchOrders();
//     }
//   }, [user]);

//   return (
//     <div className="mt-12 pb-16">
//       <div>
//         <p className="text-2xl font-medium md:text-3xl"> My-orders</p>
//       </div>
//       {myOrders.map((order, index) => (
//         <div
//           key={index}
//           className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
//         >
//           <p className="flex justify-between items-center gap-6">
//             <span>Order Id:{order._id}</span>
//             <span> Payment:{order.paymentType}</span>
//             <span> TotalAmount:${order.amount}</span>
//           </p>
//           {/* FIX 1: Correctly use 'order.items' to iterate over the products in the order */}
//           {order.items.map((item, itemIndex) => (
//             <div
//               key={itemIndex} // Changed key name for clarity
//               className={`relative bg-white text-gray-800/70 ${
//                 order.items.length !== itemIndex + 1 && "border-b"
//               } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}
//             >
//               <div className="flex items-center mb-4 md:mb-0">
//                 <div className="p-4 rounded-lg">
//                   <img
//                     src={`http://localhost:5000/images/${item.product.image[0]}`}
//                     alt={item.product.name}
//                     className="w-16 h-16"
//                   />
//                 </div>

//                 <div className="ml-4">
//                   <h2 className="text-xl font-medium">{item.product.name}</h2>
//                   <p>{item.product.category}</p>
//                 </div>
//               </div>
//               <div className="text-lg font-medium">
//                 <p>Quantity:{item.quantity || "1"}</p>
//                 <p>Status:{order.status}</p>
//                 {/* Ensure order.createdAt exists before calling new Date() */}
//                 <p>
//                   Date:
//                   {order.createdAt
//                     ? new Date(order.createdAt).toLocaleDateString() // Changed to localDateString for cleaner display
//                     : "N/A"}
//                 </p>
//               </div>
//               <p className="text-lg">
//                 Amount:${item.product.offerPrice * item.quantity}
//               </p>
//             </div>
//           ))}
//         </div>
//       ))}
//       {/* Optional: Handle the case where there are no orders */}
//       {myOrders.length === 0 && (
//         <p className="text-center text-gray-500 mt-8">No past orders found.</p>
//       )}
//     </div>
//   );
// };

// export default MyOrders;




//1.
// import { useContext, useEffect, useState } from "react";
// import { dummyOrders } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const MyOrders = () => {
//   const [myOrders, setMyOrders] = useState([]);
//   const { axios, user } = useContext(AppContext);
//   const fetchOrders = async () => {
//     try {
//       const { data } = await axios.get("/api/order/user");
//       if (data.success) {
//         setMyOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   useEffect(() => {
//     if (user) {
//       fetchOrders();
//     }
//   }, [user]);
//   return (
//     <div className="mt-12 pb-16">
//       <div>
//         <p className="text-2xl md:text-3xl font-medium">My Orders</p>
//       </div>

//       {myOrders.map((order, index) => (
//         <div
//           key={index}
//           className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
//         >
//           <p className="flex justify-between items-center gap-6 ">
//             <span>orderId :{order._id} </span>
//             <span>payment :{order.paymentType} </span>
//             <span>Total Amount :${order.amount} </span>
//           </p>
//           {order.items.map((item, index) => (
//             <div
//               key={index}
//               className={`relative bg-white text-gray-800/70 ${
//                 order.items.length !== index + 1 && "border-b"
//               } border-gray-300 flex flex-col md:flex-row md:items-center  justify-between p-4 py-5 w-full max-w-4xl`}
//             >
//               <div className="flex items-center mb-4 md:mb-0">
//                 <div className="p-4 rounded-lg">
//                   <img
//                     src={`http://localhost:5000/images/${item.product.image[0]}`}
//                     alt=""
//                     className="w-16 h-16"
//                   />
//                 </div>

//                 <div className="ml-4">
//                   <h2 className="text-xl font-medium">{item.product.name}</h2>
//                   <p>{item.product.category}</p>
//                 </div>
//               </div>

//               <div className=" text-lg font-medium">
//                 <p>Quantity:{item.quantity || "1"}</p>
//                 <p>Status:{order.status}</p>
//                 <p>Date:{new Date(order.createdAt).toLocaleString()}</p>
//               </div>
//               <p className=" text-lg">
//                 Amount:${item.product.offerPrice * item.quantity}
//               </p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };
// export default MyOrders;




import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { axios, user } = useContext(AppContext);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      if (data.success) {
        setMyOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="mt-12 pb-16">
      <div>
        <p className="text-2xl md:text-3xl font-medium">My Orders</p>
      </div>

      {myOrders.map((order, index) => (
        <div
          key={index}
          className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between items-center gap-6">
            <span>Order ID: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>Total Amount: ${order.amount}</span>
          </p>

          {order.items
            .filter(item => item.product) // Skip items with deleted products
            .map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-white text-gray-800/70 ${
                  order.items.length !== idx + 1 ? "border-b" : ""
                } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="p-4 rounded-lg">
                    <img
                      src={
                        item.product.image?.[0]
                          ? `http://localhost:5000/images/${item.product.image[0]}`
                          : "/placeholder.jpg"
                      }
                      alt={item.product.name || "Product"}
                      className="w-16 h-16"
                    />
                  </div>

                  <div className="ml-4">
                    <h2 className="text-xl font-medium">
                      {item.product.name}
                    </h2>
                    <p>{item.product.category}</p>
                  </div>
                </div>

                <div className="text-lg font-medium">
                  <p>Quantity: {item.quantity || "1"}</p>
                  <p>Status: {order.status}</p>
                  <p>
                    Date:{" "}
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>

                <p className="text-lg">
                  Amount: ${item.product.offerPrice * item.quantity}
                </p>
              </div>
            ))}
        </div>
      ))}

      {myOrders.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No past orders found.
        </p>
      )}
    </div>
  );
};

export default MyOrders;

