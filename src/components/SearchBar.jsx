import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, selectedBrand, onBrandChange, brandOptions, onClearFilters }) => {
  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4 items-center w-full">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 p-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search products"
      />

      {/* Brand Dropdown */}
      <select
        className="w-full md:w-60 p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        value={selectedBrand}
        onChange={(e) => onBrandChange(e.target.value)}
        aria-label="Filter by brand"
      >
        <option value="">All Brands</option>
        {brandOptions.map((brand) => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>

      {/* Clear Filters */}
      <button
        className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default SearchBar;

