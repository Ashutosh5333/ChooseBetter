import { useState, useEffect } from 'react';

export const useProductSelection = (allProducts) => {
  const [selectedProductIds, setSelectedProductIds] = useState(() => {
    // Load from localStorage on initial render
    try {
      const storedIds = localStorage.getItem('selectedProductIds');
      return storedIds ? JSON.parse(storedIds) : [];
    } catch (error) {
      console.error("Failed to parse selectedProductIds from localStorage", error);
      return [];
    }
  });

  // Effect to persist selectedProductIds to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('selectedProductIds', JSON.stringify(selectedProductIds));
    } catch (error) {
      console.error("Failed to save selectedProductIds to localStorage", error);
    }
  }, [selectedProductIds]);

  // Handle product selection/deselection
  const handleToggleCompare = (productId) => {
    setSelectedProductIds((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId); // Remove
      } else if (prevSelected.length < 3) {
        return [...prevSelected, productId]; // Add if less than 3
      }
      return prevSelected; // Do nothing if already 3 and not removing
    });
  };

  const handleClearComparison = () => {
    setSelectedProductIds([]);
  };

  const handleRemoveFromComparison = (productId) => {
    setSelectedProductIds((prevSelected) =>
      prevSelected.filter((id) => id !== productId)
    );
  };

  // Get actual product objects for selected IDs
  const productsToCompare = selectedProductIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean); // Filter out any undefined if product not found

  return {
    selectedProductIds,
    productsToCompare,
    handleToggleCompare,
    handleClearComparison,
    handleRemoveFromComparison,
  };
};