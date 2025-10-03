import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("./hooks/useProducts", () => ({
  useProducts: () => ({
    products: [
      {
        id: 1,
        name: "Test Vegetable",
        category: "vegetables",
        price: 5.99,
        currency: "USD",
        image: "test.jpg",
        bestseller: false,
        featured: false,
        quantity: 0,
      },
    ],
    loading: false,
    error: null,
  }),
}));

vi.mock("./hooks/useCart", () => ({
  useCart: () => ({
    cart: {
      items: [],
      total: 0,
      itemCount: 0,
    },
    addToCart: vi.fn(),
    updateQuantity: vi.fn(),
    removeFromCart: vi.fn(),
  }),
}));

describe("App", () => {
  it("renders main app components", () => {
    render(<App />);

    expect(screen.getByText("Vegetables")).toBeInTheDocument();
    expect(screen.getByText("SHOP")).toBeInTheDocument();
    expect(screen.getByText("Test Vegetable")).toBeInTheDocument();
  });

  it("renders header and product grid", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
