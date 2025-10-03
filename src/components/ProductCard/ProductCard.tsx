// src/components/ProductCard/ProductCard.tsx
import {
  Card,
  Image,
  Text,
  Group,
  Button,
  ActionIcon,
  NumberInput,
  Badge,
  Box,
} from "@mantine/core";
import { IconPlus, IconMinus, IconShoppingCart } from "@tabler/icons-react";
import { useState } from "react";
import type { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);

  const handleIncrement = () => setQuantity((prev) => Math.min(10, prev + 1));
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        boxShadow: "none",
      }}
    >
      <Card.Section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={product.image}
          height={276}
          width={276}
          alt={product.name}
          onError={() => setImageError(true)}
          style={{ objectFit: "contain" }}
        />
      </Card.Section>

      <Box
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginTop: "md",
        }}
      >
        <Group justify="space-between" align="center" mb="md">
          <Text fw={600} size="lg" lineClamp={1} style={{ flex: 1 }}>
            {product.name}
          </Text>

          <Group gap="xs">
            <ActionIcon
              variant="outline"
              color="dark"
              size="sm"
              onClick={handleDecrement}
              disabled={quantity <= 1}
              style={{
                backgroundColor: "rgba(222, 226, 230, 1)",
                border: "none",
              }}
            >
              <IconMinus size={14} color="black" />
            </ActionIcon>

            <NumberInput
              value={quantity}
              onChange={(value) => setQuantity(Number(value) || 1)}
              min={1}
              max={10}
              hideControls
              variant="unstyled"
              style={{ width: 10 }}
              size="xs"
            />

            <ActionIcon
              variant="outline"
              color="dark"
              size="sm"
              onClick={handleIncrement}
              disabled={quantity >= 10}
              style={{
                backgroundColor: "rgba(222, 226, 230, 1)",
                border: "none",
              }}
            >
              <IconPlus size={14} color="black" />
            </ActionIcon>
          </Group>
        </Group>

        <Group
          justify="space-between"
          align="center"
          style={{ marginTop: "auto" }}
        >
          <Badge color="black" variant="transparent" size="xl">
            ${product.price}
          </Badge>

          <Button
            size="sm"
            radius="md"
            onClick={handleAddToCart}
            rightSection={<IconShoppingCart size={16} />}
            style={{
              backgroundColor: "#E7FAEB",
              color: "#3B944E",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#D4F7DC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E7FAEB";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor = "#3B944E";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor = "#D4F7DC";
              e.currentTarget.style.color = "#3B944E";
            }}
          >
            Add to cart
          </Button>
        </Group>
      </Box>
    </Card>
  );
};
