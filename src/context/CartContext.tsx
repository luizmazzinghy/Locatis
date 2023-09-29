import React, { useContext, useState } from "react";

export interface CartItem {
  productId: number;
  quantity: number;
}

interface CartProviderData {
  cartItems: CartItem[];
  clearCart: () => void;
  addCartItem: (productId: number, quantity: number) => void;
  removeCartItem: (productId: number, quantity: number) => void;
}

export const CartContext = React.createContext<CartProviderData>({
  cartItems: [],
  clearCart: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
});

interface CartProviderProps {
  children: JSX.Element;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addCartItem = (productId: number, quantity: number) => {
    // Clonar cartItems
    const cloneCartItems = [...cartItems];

    // Descobrir o índice do produto no carrinho
    const itemIndex = cloneCartItems.findIndex(
      (item) => item.productId === productId
    );

    if (itemIndex !== -1) {
      // Se o produto já existir no carrinho, atualize a quantidade
      cloneCartItems[itemIndex].quantity += quantity;
    } else {
      // Se o produto não existir, adicione-o ao carrinho
      cloneCartItems.push({ productId, quantity });
    }

    // Atualize o estado com o novo array clonado
    setCartItems(cloneCartItems);
  };

  const removeCartItem = (productId: number, quantity: number) => {
    // Clonar cartItems
    const cloneCartItems = [...cartItems];

    // Descobrir o índice do produto no carrinho
    const itemIndex = cloneCartItems.findIndex(
      (item) => item.productId === productId
    );

    if (itemIndex !== -1) {
      // Verificar se há mais de um item para remover
      if (cloneCartItems[itemIndex].quantity > 1) {
        cloneCartItems[itemIndex].quantity -= quantity;
      } else {
        // Se houver apenas um item, remova-o do carrinho
        cloneCartItems.splice(itemIndex, 1);
      }
    }

    // Atualize o estado com o novo array clonado
    setCartItems(cloneCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ removeCartItem, addCartItem, clearCart, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartQuantityItems = () => {
  const { cartItems } = useContext(CartContext);
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].quantity;
  }

  return total;
};
