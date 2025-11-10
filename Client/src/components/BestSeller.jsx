import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="mt-10">
      <p className="text-2xl font-medium md:text-3xl">BestSeller</p>

      <div className="flex overflow-x-scroll gap-4 py-4">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
