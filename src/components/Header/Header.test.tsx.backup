import { screen } from "@testing-library/react";
import { render } from "../../test/test-utils";
import { Header } from "./Header";
import type { Cart } from "../../types";

const mockCart: Cart = {
  items: [],
  total: 0,
  itemCount: 0,
};

describe("Header", () => {
  it("renders header with title", () => {
    render(
      <Header cart={mockCart} onCartClick={() => {}} updateQuantity={vi.fn()} />
    );

    expect(screen.getByText("Vegetables")).toBeInTheDocument();
    expect(screen.getByText("SHOP")).toBeInTheDocument();
  });

  it("shows cart button", () => {
    render(
      <Header cart={mockCart} onCartClick={() => {}} updateQuantity={vi.fn()} />
    );

    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
