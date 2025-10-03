import { screen } from "@testing-library/react";
import { render } from "../../test/test-utils";
import { ProductGrid } from "./ProductGrid";
import type { Product } from "../../types";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Carrot",
    category: "vegetables",
    price: 2.99,
    currency: "USD",
    image: "carrot.jpg",
    bestseller: false,
    featured: false,
    quantity: 0,
  },
];

describe("ProductGrid", () => {
  it("renders products when not loading", () => {
    render(
      <ProductGrid
        products={mockProducts}
        loading={false}
        error={null}
        onAddToCart={vi.fn()}
      />
    );

    expect(screen.getByText("Carrot")).toBeInTheDocument();
  });

  it("shows error message", () => {
    render(
      <ProductGrid
        products={[]}
        loading={false}
        error="Failed to load"
        onAddToCart={vi.fn()}
      />
    );

    expect(screen.getByText(/Ошибка загрузки/)).toBeInTheDocument();
  });
});
