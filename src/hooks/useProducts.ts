// src/hooks/useProducts.ts
import { useState, useEffect } from "react";
import type { Product } from "../types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //await new Promise((resolve) => setTimeout(resolve, 3000));
        const response = await fetch(
          "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
        );
        const data = await response.json();
        setProducts(data.map((product: any) => ({ ...product, quantity: 0 })));
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
