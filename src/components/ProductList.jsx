import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const ProductList = ({
  products,
  selectedProductIds,
  onToggleCompare,
  focusRefs,
}) => {
  const maxSelectedReached = selectedProductIds.length >= 3;

  // Clear previous refs on each render
  focusRefs.current = [];

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-400 p-8">
        No products found. Try a different search!
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${
        selectedProductIds.length >= 2
          ? "md:grid-cols-2"
          : "md:grid-cols-3 lg:grid-cols-4"
      } gap-4 lg:gap-6 p-2 xl:p-4`}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ProductCard
            product={product}
            isSelected={selectedProductIds.includes(product.id)}
            onToggleCompare={onToggleCompare}
            maxSelectedReached={maxSelectedReached}
            selectedProductIds={selectedProductIds}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
