import { useState, useEffect } from 'react';
import {staticProducts} from "../constant/index"

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setProducts(staticProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);


  return { products, loading, error };
};