import { renderHook, act } from "@testing-library/react";
import { useCart } from "./useCart";
import type { Product } from "../../types";

const mockProduct: Product = {
  id: 1,
  name: "Test Product",
  category: "test",
  price: 10,
  currency: "USD",
  image: "test.jpg",
  bestseller: false,
  featured: false,
  quantity: 0,
};

describe("useCart", () => {
  it("initializes with empty cart", () => {
    const { result } = renderHook(() => useCart());

    expect(result.current.cart.items).toHaveLength(0);
    expect(result.current.cart.total).toBe(0);
    expect(result.current.cart.itemCount).toBe(0);
  });

  it("adds product to cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(mockProduct, 2);
    });

    expect(result.current.cart.items).toHaveLength(1);
    expect(result.current.cart.total).toBe(20);
    expect(result.current.cart.itemCount).toBe(2);
  });
});
