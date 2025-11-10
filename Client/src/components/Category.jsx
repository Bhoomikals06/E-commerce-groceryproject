import React, { useContext } from "react";
import { categories } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Category = () => {
  const { navigate } = useContext(AppContext);
  return (
    <div className="mt-10">
      <p className="text-2xl font-medium md:text-3xl">Categories</p>

      {/* This parent <div> will likely need Tailwind's 'grid' or 'flex' 
        to arrange the categories horizontally.
      */}
      <div className="flex gap-4 overflow-x-scroll py-4 justify-between">
        {/* FIX: Changed { to ( for implicit return. 
          The JSX content inside the map function is now correctly rendered.
        */}
        {categories.map((category, index) => (
          <div
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
            key={index}
            className={`group cursor-pointer py-5 px-3 
                        rounded-lg gap-2 flex flex-col items-center justify-center 
                        min-w-[120px] shadow-sm hover:shadow-md transition-shadow duration-300`}
            style={{ backgroundColor: category.bgColor }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="max-w-28 transition group-hover:scale-110"
            />
            <p className="text-sm font-medium">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
