import {
  Group,
  Title,
  Button,
  Badge,
  Popover,
  Text,
  Stack,
  Box,
  Image,
  ActionIcon,
} from "@mantine/core";
import {
  IconShoppingCart,
  IconMinus,
  IconPlus,
  IconBasketOff,
} from "@tabler/icons-react";
import type { Cart } from "../../types";

interface HeaderProps {
  cart: Cart;
  onCartClick: () => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const Header = ({ cart, onCartClick, updateQuantity }: HeaderProps) => {
  return (
    <Box
      component="header"
      py="sm"
      px="lg" //
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "white",
      }}
    >
      <Group justify="space-between">
        <Group gap="xs">
          <Title
            order={1}
            fw={600}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Text span style={{ fontSize: "1.35rem" }}>
              Vegetables
            </Text>
            <Text
              span
              style={{
                backgroundColor: "rgba(84, 180, 106, 1)",
                color: "white",
                padding: "4px 12px",
                borderRadius: "40px",
                fontSize: "1.25rem",
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              SHOP
            </Text>
          </Title>
        </Group>

        <Popover position="bottom-end" withArrow shadow="md" width={444}>
          <Popover.Target>
            <Button
              variant="inline"
              color="green"
              radius="md"
              leftSection={
                cart.itemCount > 0 ? (
                  <Badge
                    circle
                    size="sm"
                    style={{
                      marginRight: "8px",
                      background: "white",
                      color: "black",
                    }}
                  >
                    {cart.itemCount}
                  </Badge>
                ) : null
              }
              rightSection={<IconShoppingCart size={20} />}
            >
              Cart
            </Button>
          </Popover.Target>

          <Popover.Dropdown>
            <Stack gap="xs">
              {cart.items.length === 0 ? (
                <Box style={{ width: 300, textAlign: "center" }}>
                  <Stack align="center">
                    <IconBasketOff
                      size={64}
                      color="var(--mantine-color-gray-5)"
                      stroke={1.5}
                    />
                    <Text c="dimmed" size="md" fw={400}>
                      Your cart is empty
                    </Text>
                  </Stack>
                </Box>
              ) : (
                <>
                  {cart.items.map((item) => (
                    <Box
                      key={item.product.id}
                      style={{
                        borderBottom: "1px solid #f0f0f0",
                        minHeight: "64px",
                      }}
                      pb="sm"
                    >
                      <Group
                        align="flex-start"
                        justify="space-between"
                        wrap="nowrap"
                      >
                        <Group
                          align="flex-start"
                          gap="sm"
                          wrap="nowrap"
                          style={{ flex: 1 }}
                        >
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                            }}
                          >
                            <Image
                              src={item.product.image}
                              width={64}
                              height={64}
                              radius="md"
                              fit="cover"
                            />
                          </Box>

                          <Stack gap={2} style={{ flex: 1 }}>
                            <Group wrap="nowrap" style={{ width: "100%" }}>
                              <Text
                                fw={500}
                                size="sm"
                                lineClamp={1}
                                style={{ flex: 1 }}
                              >
                                {item.product.name}
                              </Text>
                            </Group>

                            <Group
                              justify="space-between"
                              wrap="nowrap"
                              style={{ width: "100%" }}
                            >
                              {/* Стоимость */}
                              <Text fw={600} c="green.7" size="sm">
                                $
                                {(item.product.price * item.quantity).toFixed(
                                  2
                                )}
                              </Text>

                              <Group gap="xs">
                                <ActionIcon
                                  variant="outline"
                                  size="sm"
                                  color="black"
                                  style={{
                                    background: "rgba(222, 226, 230, 1)",
                                  }}
                                  onClick={() =>
                                    updateQuantity(
                                      item.product.id,
                                      item.quantity - 1
                                    )
                                  }
                                >
                                  <IconMinus size={14} />
                                </ActionIcon>

                                <Text
                                  fw={500}
                                  size="sm"
                                  style={{
                                    minWidth: "2px",
                                    textAlign: "center",
                                    lineHeight: 1,
                                  }}
                                >
                                  {item.quantity}
                                </Text>

                                <ActionIcon
                                  variant="outline"
                                  size="sm"
                                  color="black"
                                  style={{
                                    background: "rgba(222, 226, 230, 1)",
                                  }}
                                  onClick={() =>
                                    updateQuantity(
                                      item.product.id,
                                      item.quantity + 1
                                    )
                                  }
                                >
                                  <IconPlus size={14} />
                                </ActionIcon>
                              </Group>
                            </Group>
                          </Stack>
                        </Group>
                      </Group>
                    </Box>
                  ))}

                  <Box pt="md">
                    <Group justify="space-between">
                      <Text fw={600} size="md">
                        Total
                      </Text>
                      <Text fw={600} size="md" c="black">
                        ${cart.total.toFixed(2)}
                      </Text>
                    </Group>
                  </Box>
                </>
              )}
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </Group>
    </Box>
  );
};
