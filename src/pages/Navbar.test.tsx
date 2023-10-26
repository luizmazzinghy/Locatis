import Navbar from "./Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";

const handleOpenCart = jest.fn();

function renderNavbar() {
  return render(
    <BrowserRouter>
      <CartProvider>
        <Navbar handleOpenCart={handleOpenCart} />
      </CartProvider>
    </BrowserRouter>
  );
}

test("the navigation bar should be rendered", () => {
  renderNavbar();
});

test("should render the logo", () => {
  renderNavbar();
  const logoImage = screen.getByAltText(/logo/i);
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute(
    "src",
    "https://www.locatis.eu/images/tn_locatis_logo.PNG"
  );
});

test(" button test Workshop Registration", () => {
  renderNavbar();
  const cadastroWorkshop = screen.getByTestId("cadastroWorkshop");
  expect(cadastroWorkshop).toBeInTheDocument();
  fireEvent.click(cadastroWorkshop);

  expect(screen.getByRole("link", { name: "Cadastro" })).toHaveAttribute(
    "href",
    "/cadastro"
  );
});

test(" button test User Registration", () => {
  renderNavbar();
  const cadastroUsuario = screen.getByTestId("cadastroUsuario");
  expect(cadastroUsuario).toBeInTheDocument();
  fireEvent.click(cadastroUsuario);

  expect(screen.getByRole("link", { name: "Usuario" })).toHaveAttribute(
    "href",
    "/cadastroUsuario"
  );
});

test("should cart render  ", async () => {
  renderNavbar();
  const button = screen.getByRole("button", {
    name: "cart",
  });
  expect(button).toBeInTheDocument();

  await handleOpenCart();

  fireEvent.click(button);
  expect(handleOpenCart).toHaveBeenCalledTimes(1);
});
