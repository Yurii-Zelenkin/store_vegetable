// src/components/ProductGrid/ProductGrid.tsx
import { SimpleGrid, Container, Card, Box } from "@mantine/core";
import { ProductCard } from "../ProductCard/ProductCard";
import type { Product } from "../../types";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  onAddToCart: (product: Product, quantity: number) => void;
}

// loader в виде полосок
const BarsLoader = () => (
  <Box style={{ display: "flex", alignItems: "center", gap: "4px" }}>
    <Box
      style={{
        width: "2.4px",
        height: "20px",
        backgroundColor: "#adb5bd",
        animation: "pulse 1.2s ease-in-out infinite",
        animationDelay: "0s",
        borderRadius: "6px",
      }}
    />
    <Box
      style={{
        width: "2.4px",
        height: "6.5px",
        backgroundColor: "#adb5bd",
        animation: "pulse 1.2s ease-in-out infinite",
        animationDelay: "0.2s",
        borderRadius: "6px",
      }}
    />
    <Box
      style={{
        width: "2.4px",
        height: "13px",
        backgroundColor: "#adb5bd",
        animation: "pulse 1.2s ease-in-out infinite",
        animationDelay: "0.4s",
        borderRadius: "6px",
      }}
    />
    <Box
      style={{
        width: "2.4px",
        height: "6.5px",
        backgroundColor: "#adb5bd",
        animation: "pulse 1.2s ease-in-out infinite",
        animationDelay: "0.6s",
        borderRadius: "6px",
      }}
    />
    <Box
      style={{
        width: "2.4px",
        height: "20px",
        backgroundColor: "#adb5bd",
        animation: "pulse 1.2s ease-in-out infinite",
        animationDelay: "0.8s",
        borderRadius: "6px",
      }}
    />

    <style>
      {`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}
    </style>
  </Box>
);

export const ProductGrid = ({
  products,
  loading,
  error,
  onAddToCart,
}: ProductGridProps) => {
  if (error) {
    return (
      <Box
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>Ошибка загрузки: {error}</div>
      </Box>
    );
  }

  return (
    <Box style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container size="xl" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{
                    height: "412px",
                    width: "302px",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    style={{
                      height: "276px",
                      width: "276px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#F3F5FA",
                      borderRadius: "16px",
                      position: "relative",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <BarsLoader />
                  </Box>

                  <Box style={{ flex: 1, marginTop: "16px" }} />
                </Card>
              ))
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
