import { screen } from "@testing-library/react";
import { render } from "../../test/test-utils";
import { ProductCard } from "./ProductCard";
import type { Product } from "../../types";

const mockProduct: Product = {
  id: 1,
  name: "Test Vegetable",
  category: "vegetables",
  price: 5.99,
  currency: "USD",
  image: "test.jpg",
  bestseller: false,
  featured: false,
  quantity: 0,
};

describe("ProductCard", () => {
  it("renders product information", () => {
    render(<ProductCard product={mockProduct} onAddToCart={vi.fn()} />);

    expect(screen.getByText("Test Vegetable")).toBeInTheDocument();
    expect(screen.getByText("$5.99")).toBeInTheDocument();
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
  });
});
