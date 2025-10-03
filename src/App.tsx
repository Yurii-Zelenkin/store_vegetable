// src/App.tsx
import { MantineProvider, createTheme, Box } from "@mantine/core";
import { Header } from "./components/Header/Header";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { useProducts } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";

const theme = createTheme({
  primaryColor: "green",
});

function App() {
  const { products, loading, error } = useProducts();
  const { cart, addToCart, updateQuantity } = useCart();

  return (
    <MantineProvider theme={theme}>
      <Box style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <Header
          cart={cart}
          onCartClick={() => {}}
          updateQuantity={updateQuantity}
        />
        <ProductGrid
          products={products}
          loading={loading}
          error={error}
          onAddToCart={addToCart}
        />
      </Box>
    </MantineProvider>
  );
}

export default App;
