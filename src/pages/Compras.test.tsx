import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Compras from "./Compras";

test("deve renderizar", () => {
  const { debug } = render(
    <BrowserRouter>
      <CartProvider>
        <Compras />
      </CartProvider>
    </BrowserRouter>
  );
  const numeroCartaoInput = screen.getByRole("textbox", {
    name: "Número do cartão",
  });

  expect(numeroCartaoInput).toBeInTheDocument();
  debug();
});
