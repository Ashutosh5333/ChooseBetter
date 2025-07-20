import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import ComparisonView from "./components/ComparisonView";
import { useProducts } from "./hooks/useProducts";
import { useProductSelection } from "./hooks/useProductSelection";

const App = () => {
  const { products, loading, error } = useProducts();
  const {
    selectedProductIds,
    productsToCompare,
    handleToggleCompare,
    handleClearComparison,
    handleRemoveFromComparison,
  } = useProductSelection(products); // Pass products to useProductSelection

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const focusRefs = useRef([]);

  //  console.log("products=====>",products)
  const brandOptions = [...new Set(products.map((p) => p.brand))];

  // Handle search/filter logic based on fetched products
  useEffect(() => {
    if (products.length > 0) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      const filtered = products.filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          product.brand.toLowerCase().includes(lowerCaseSearchTerm) ||
          product.features.some((feature) =>
            feature.value.toLowerCase().includes(lowerCaseSearchTerm)
          );

        const matchesBrand = selectedBrand
          ? product.brand === selectedBrand
          : true;

        return matchesSearch && matchesBrand;
      });

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, selectedBrand, products]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        Error loading products: {error.message}
      </div>
    );
  }

  return (
    <>
      <div
        className="min-h-screen bg-gray-100
       dark:bg-gray-900 text-gray-900 dark:text-gray-100 
       transition-colors duration-300"
      >
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md p-4">
          <h1 className="text-xl sm:text-2xl font-semibold">
            🛍️ Product Comparison
          </h1>
        </nav>

        <main className="mx-auto  px-2 sm:px-6 lg:px-8 py-4">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedBrand={selectedBrand}
            onBrandChange={setSelectedBrand}
            brandOptions={brandOptions}
            onClearFilters={handleClearFilters}
          />

          {/*  Product Displaying */}

          <div className={` border-red-400 flex flex-col md:flex-row gap-6`}>
            <section
              className={`my-8  w-full  ${
                selectedProductIds.length === 2 ||
                selectedProductIds.length === 3
                  ? "md:w-[50%]"
                  : ""
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Available Products
              </h2>
              <ProductList
                products={filteredProducts}
                selectedProductIds={selectedProductIds}
                onToggleCompare={handleToggleCompare}
                focusRefs={focusRefs}
              />
            </section>

            {productsToCompare.length >= 2 && (
              <section
                className="mt-8  dark:bg-gray-800 rounded-lg p-1 lg:p-2 md:w-[50%]
                "
              >
                <div className="flex justify-between py-1 mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold  items-center  ">
                    Product Comparison
                  </h2>
                  <button
                    onClick={handleClearComparison}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 
                    px-4 rounded-md text-sm transition-colors duration-200"
                  >
                    Clear All
                  </button>
                </div>

                <ComparisonView
                  products={productsToCompare}
                  onRemove={handleRemoveFromComparison}
                />
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
