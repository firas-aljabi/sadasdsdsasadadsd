import React from "react";

const CategoryItem = ({ category, lang, onClick }) => {
  return (
    <div className="focus-within:text-[#ab714d]  ">
      <button
        className="sm:h-32 h-24 p-5  overflow-hidden   focus-within:border-[#ab714d] bg-[#251c16] rounded-lg cursor-pointer text-[#C4C4C4] hover:border-[#ab714d]  transition duration-300 ease-in-out flex flex-col items-center justify-center w-full"
        onClick={() => onClick(category)}
      >
        <img
          src={category.imageurl}
          alt={category.name}
          className="object-center object-contain h-28 w-full rounded-lg hover:scale-110 hover:opacity-60 ease-in-out duration-200 transition-all "
        />
      </button>
      <h1 className="text-xs py-2 cursor-pointer  sm:text-base md:text-lg pb-1 text-[#C4C4C4] tracking-wider">
        {lang === "ar" ? category.name_trans : category.name}
      </h1>
    </div>
  );
};

export default CategoryItem;
