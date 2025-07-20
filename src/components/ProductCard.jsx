import React from "react";

const ProductCard = ({
  product,
  isSelected,
  onToggleCompare,
  maxSelectedReached,
  selectedProductIds,
}) => {
  const { id, name, brand, image, price } = product;
  const buttonText = isSelected ? "Remove from Compare" : "Add to Compare";
  const buttonClasses = isSelected
    ? "bg-gradient-to-br from-red-600 to-red-700"
    : "bg-gradient-to-br from-indigo-600 to-purple-600";

  const isDisabled = !isSelected && maxSelectedReached;

  return (
    <div
      className={`
    bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col items-center justify-between
    border transition-transform duration-200 hover:scale-[1.03] 
    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    ${
      isSelected
        ? "border-green-500 dark:border-green-400"
        : "border-gray-200 dark:border-gray-700"
    }
    h-[340px] max-w-xs w-full mx-auto
  `}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      aria-label={`${name}, ${brand}, ${
        isSelected ? "Selected" : "Not selected"
      }`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggleCompare(id);
        }
      }}
    >
      <img
        src={image}
        alt={name}
        className={` ${
          selectedProductIds.length >= 2 ? "w-24 h-24" : "w-28 h-28 mb-1"
        } object-contain  rounded-md `}
      />

      <h3
        className={`${
          selectedProductIds.length >= 2
            ? "text-ellipsis  text-wrap text-xs"
            : "sm:text-sm"
        } text-xs  font-semibold text-center mb-1
         text-gray-800 dark:text-gray-100 line-clamp-2 min-h-[3rem]`}
        title={name}
      >
        {name}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{brand}</p>
      <p className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-4">
        ${price.toFixed(2)}
      </p>

      <button
        onClick={() => onToggleCompare(id)}
        className={`w-full py-2 px-4 text-xs sm:text-sm text-white font-semibold 
        rounded-lg transition-all duration-200
          ${buttonClasses}
          ${
            isDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-[1.02] active:scale-[0.97]"
          }
        `}
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductCard;
