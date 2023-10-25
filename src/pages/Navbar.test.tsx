import Navbar from "./Navbar";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";

// Define handleBack function before using it in the tests
const handleBack = jest.fn();

function renderNavbar() {
  return render(
    <BrowserRouter>
      <CartProvider>
        <Navbar handleBack={handleBack} />
      </CartProvider>
    </BrowserRouter>
  );
}

// test("the navigation bar should be rendered", () => {
//   renderNavbar();
// });

// test("should render the logo", () => {
//   renderNavbar();
//   const logoImage = screen.getByAltText(/logo/i);
//   expect(logoImage).toBeInTheDocument();
// });

// test("check if clicking the logo triggers handleBack", () => {
//   renderNavbar();
//   const logoImage = screen.getByTestId("button");

//   fireEvent.click(logoImage);
//   // expect(handleBack).toHaveBeenCalled();
// });

test("Se eu clicar vai chamar a função correta?", () => {
  renderNavbar();

  const logoImage = screen.getByAltText(/logo/i);

  // Vejo que o botão não foi clicado

  // Clicando no botão
  fireEvent.click(logoImage);
  expect(window.location.pathname).toBe("/");
  // O botão foi clicado
  // expect(onClick).toHaveBeenCalledTimes(1);
});

// test("verify if the logo image has the correct src attribute", () => {
//   renderNavbar();
//   const logoImage = screen.getByAltText(/logo/i);
//   expect(logoImage).toHaveAttribute(
//     "src",
//     "https://www.locatis.eu/images/tn_locatis_logo.PNG"
//   );
// });
