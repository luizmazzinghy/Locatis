import Navbar from "./Navbar";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";

test("Define se isCartOpen e true ", () => {
  const { debug } = render(
    <div id="root">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
  // expect(container.querySelector(".cart-open")).toBeNull();

  // const openCartButton = screen.getByText("Abrir Carrinho");
  debug();
  // fireEvent.click(openCartButton);
  // expect(container.querySelector(".cart-open")).toBeInTheDocument();
});
