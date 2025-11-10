// import React, { useContext } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Navbar from "./components/Navbar";
// import { AppContext } from "./context/AppContext";
// import MyOrders from "./pages/MyOrders";
// import Auth from "./models/Auth";
// import ProductCategory from "./pages/ProductCategory";
// import Footer from "./components/Footer";
// import { Toaster } from "react-hot-toast";
// import AddAddress from "./pages/AddAddress";
// import SellerLayout from "./pages/seller/SellerLayout";

// import AddProduct from "./pages/seller/AddProduct";
// import ProductList from "./pages/seller/ProductList";
// import Orders from "./pages/seller/Orders";
// import SellerLogin from "./components/seller/SellerLogin";

// const App = () => {
//   const { isSeller, showUserLogin } = useContext(AppContext);
//   // This logic correctly hides the Navbar when the URL contains "seller"
//   const isSellerPath = useLocation().pathname.includes("seller");

//   return (
//     <div className="text-default min-h-screen">
//       {/* Navbar is correctly hidden if the path includes "seller" */}
//       {isSellerPath ? null : <Navbar />}
//       {showUserLogin ? <Auth /> : null}
//       <Toaster />

//       <div className="px-6 md:px-16 lg:px-24 xl:px-32">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/product/:category/:id" element={<ProductDetails />} />
//           <Route path="/products/:category" element={<ProductCategory />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/my-orders" element={<MyOrders />} />
//           <Route path="/add-address" element={<AddAddress />} />

//           <Route
//             path="/seller"
//             element={isSeller ? <SellerLayout /> : <SellerLogin />}
//           >
//             <Route
//               index // **CORRECTION:** Renders AddProduct when the path is exactly "/seller"
//               element={isSeller ? <AddProduct /> : null}
//             />

//             <Route
//               path="product-list"
//               element={isSeller ? <ProductList /> : null}
//             />

//             <Route path="orders" element={isSeller ? <Orders /> : null} />
//           </Route>
//         </Routes>
//       </div>
//       {/* Footer is correctly hidden if the path includes "seller" */}
//       {isSellerPath ? null : <Footer />}
//     </div>
//   );
// };

// export default App;
// App.jsx
import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import MyOrders from "./pages/MyOrders";
import Auth from "./models/Auth";
import ProductCategory from "./pages/ProductCategory";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import AddAddress from "./pages/AddAddress";
import SellerLayout from "./pages/seller/SellerLayout";

import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";
import SellerLogin from "./components/seller/SellerLogin";
import Loading from "./components/Loading";

const App = () => {
  const { isSeller, showUserLogin } = useContext(AppContext);
  // This logic correctly hides the Navbar when the URL contains "seller"
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div className="text-default min-h-screen">
      {/* Navbar is correctly hidden if the path includes "seller" */}
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <Toaster />

      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:category/:id" element={<ProductDetails />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/seller-login" element={<SellerLogin/>}/>
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route
              // CORRECTION: Renders AddProduct when the path is exactly "/seller"
              index
              element={isSeller ? <AddProduct /> : null}
            />

            <Route
              path="product-list"
              element={isSeller ? <ProductList /> : null}
            />

            <Route path="orders" element={isSeller ? <Orders /> : null} />
          </Route>
        </Routes>
      </div>
      {/* Footer is correctly hidden if the path includes "seller" */}
      {isSellerPath ? null : <Footer />}
    </div>
  );
};

export default App;
