import { renderHook, waitFor } from "@testing-library/react";
import { useProducts } from "./useProducts";

global.fetch = vi.fn();

describe("useProducts", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("initializes with loading state", () => {
    const { result } = renderHook(() => useProducts());

    expect(result.current.loading).toBe(true);
    expect(result.current.products).toHaveLength(0);
    expect(result.current.error).toBeNull();
  });

  it("fetches products successfully", async () => {
    const mockProducts = [
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

    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    } as Response);

    const { result } = renderHook(() => useProducts());

    await waitFor(
      () => {
        expect(result.current.loading).toBe(false);
      },
      { timeout: 5000 }
    );

    expect(result.current.products).toHaveLength(1);
    expect(result.current.error).toBeNull();
  });

  it("handles fetch error", async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error("Failed to fetch"));

    const { result } = renderHook(() => useProducts());

    await waitFor(
      () => {
        expect(result.current.loading).toBe(false);
      },
      { timeout: 5000 }
    );

    expect(result.current.error).toBe("Failed to fetch products");
    expect(result.current.products).toHaveLength(0);
  });
});
