// import { useContext, useEffect, useState } from "react";
// import { assets, dummyOrders } from "../../assets/assets";
// import { AppContext } from "../../context/AppContext";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const { axios } = useContext(AppContext);
//   const fetchOrders = async () => {
//     setOrders(dummyOrders);

//     try {
//       const { data } = await axios.get("/api/order/seller");
//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   useEffect(() => {
//     fetchOrders();
//   }, []);
//   return (
//     <div className="md:p-10 p-4 space-y-4">
//       <h2 className="text-lg font-medium">Orders List</h2>
//       {orders.map((order, index) => (
//         <div
//           key={index}
//           className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
//         >
//           <div className="flex gap-5">
//             {/* <img
//               className="w-12 h-12 object-cover opacity-60"
//               src={`http://localhost:5000/images/${order.items[0].product.image[0]}`}
//               alt="boxIcon"
//             /> */}
// {orders.map(order => (
//   <p>{order.product?.name || 'Unnamed Product'}</p>
// ))}


//             <>
//               {order.items.map((item, index) => (
//                 <div key={index} className="flex flex-col justify-center">
//                   <p className="font-medium">
//                     {item.product.name}{" "}
//                     <span
//                       className={`text-indigo-500 ${
//                         item.quantity < 2 && "hidden"
//                       }`}
//                     >
//                       x {item.quantity}
//                     </span>
//                   </p>
//                 </div>
//               ))}
//             </>
//           </div>

//           <div className="text-sm">
//             <p className="font-medium mb-1">
//               {order.address.firstName} {order.address.lastName}
//             </p>
//             <p>
//               {order.address.street}, {order.address.city},{" "}
//               {order.address.state},{order.address.zipcode},{" "}
//               {order.address.country}
//             </p>
//           </div>

//           <p className="font-medium text-base my-auto text-black/70">
//             ${order.amount}
//           </p>

//           <div className="flex flex-col text-sm">
//             <p>Method: {order.paymentType}</p>
//             <p>Date: {order.orderDate}</p>
//             <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Orders;


// import { useContext, useEffect, useState } from "react";
// import { assets, dummyOrders } from "../../assets/assets";
// import { AppContext } from "../../context/AppContext";
// import { toast } from "react-toastify";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const { axios } = useContext(AppContext);

//   const fetchOrders = async () => {
//     setOrders(dummyOrders); // Optional fallback for testing

//     try {
//       const { data } = await axios.get("/api/order/seller");
//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Helper to style current status
//   const renderCurrentStatus = (status) => {
//     const statusColors = {
//       Ordered: "bg-blue-500",
//       Shipped: "bg-purple-500",
//       "Out for Delivery": "bg-yellow-500",
//       Delivered: "bg-green-500",
//     };

//     return (
//       <span
//         className={`text-white text-sm px-3 py-1 rounded-full font-medium ${
//           statusColors[status] || "bg-gray-400"
//         }`}
//       >
//         {status}
//       </span>
//     );
//   };

//   return (
//     <div className="md:p-10 p-4 space-y-4">
//       <h2 className="text-lg font-medium">Orders List</h2>

//       {orders.map((order, index) => {
//         const validItems = order.items.filter(item => item.product);

//         return (
//           <div
//             key={index}
//             className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
//           >
//             <div className="flex gap-5">
//               {/* Render first valid product image if available */}
//               {validItems[0]?.product?.image?.[0] ? (
//                 <img
//                   className="w-12 h-12 object-cover opacity-60"
//                   src={`http://localhost:5000/images/${validItems[0].product.image[0]}`}
//                   alt={validItems[0].product.name}
//                 />
//               ) : (
//                 <img
//                   className="w-12 h-12 object-cover opacity-60"
//                   src="/placeholder.jpg"
//                   alt="No Image"
//                 />
//               )}

//               <div className="flex flex-col justify-center">
//                 {validItems.map((item, idx) => (
//                   <p key={idx} className="font-medium">
//                     {item.product.name}{" "}
//                     <span
//                       className={`text-indigo-500 ${
//                         item.quantity < 2 ? "hidden" : ""
//                       }`}
//                     >
//                       x {item.quantity}
//                     </span>
//                   </p>
//                 ))}
//               </div>
//             </div>

//             <div className="text-sm">
//               <p className="font-medium mb-1">
//                 {order.address?.firstName} {order.address?.lastName}
//               </p>
//               <p>
//                 {order.address?.street}, {order.address?.city},{" "}
//                 {order.address?.state}, {order.address?.zipcode},{" "}
//                 {order.address?.country}
//               </p>
//             </div>

//             <p className="font-medium text-base my-auto text-black/70">
//               ${order.amount}
//             </p>

//             <div className="flex flex-col text-sm gap-1">
//               <p>Method: {order.paymentType}</p>
//               <p>Date: {order.orderDate}</p>
//               <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
//               <p>Status: {renderCurrentStatus(order.status)}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Orders;

import { useContext, useEffect, useState } from "react";
import { dummyOrders } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
// import { IoLocationSharp } from "react-icons/io5";
// import { MdOutlinePayment } from "react-icons/md";
// import { FcCalendar } from "react-icons/fc";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { axios } = useContext(AppContext);

  const fetchOrders = async () => {
    setOrders(dummyOrders); // Optional fallback for testing

    try {
      const { data } = await axios.get("/api/order/seller");
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const statusColors = {
    "Order Received": "bg-blue-500",
    Packed: "bg-purple-500",
    "Out for Delivery": "bg-yellow-500",
    Delivered: "bg-green-500",
  };

  const statusIcons = {
    "Order Received": "",
    Packed: "",
    "Out for Delivery": "",
    Delivered: "",
  };

  const renderStatus = (status) => (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-sm font-medium ${
        statusColors[status] || "bg-gray-400"
      }`}
    >
      {statusIcons[status]} {status}
    </span>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800"> Orders List</h2>

      {orders.map((order, index) => {
        const validItems = order.items.filter(item => item.product);

        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 space-y-4 transition-transform hover:scale-[1.01]"
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-700">
                Order #{order._id || index + 1}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleDateString("en-IN", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {validItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img
                    src={
                      item.product.image?.[0]
                        ? `http://localhost:5000/images/${item.product.image[0]}`
                        : "/placeholder.jpg"
                    }
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div>
                    <p className="font-semibold">{item.product.name}</p>
                    {item.quantity > 1 && (
                      <p className="text-sm text-indigo-500">x{item.quantity}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-1">
             {order.address?.firstName} {order.address?.lastName}
              </p>
              <p>
                {order.address?.street}, {order.address?.city},{" "}
                {order.address?.state}, {order.address?.zipcode},{" "}
                {order.address?.country}
              </p>
            </div>
            {/* Payment & Status */}
            <div className="flex flex-wrap justify-between items-center text-sm text-gray-700">
              <p>
               <span className="font-medium">Payment Method:</span>{" "}
                {order.paymentType === "online" ? "Online Payment" : order.paymentType}
              </p>
              <p>
                 <span className="font-medium">Total:</span> ${order.amount}
              </p>
              <p>
                <span className="font-medium">Status:</span> {renderStatus(order.status)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
