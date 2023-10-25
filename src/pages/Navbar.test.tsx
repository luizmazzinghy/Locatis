import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";

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

test("the navigation bar should be rendered", () => {
  renderNavbar();
});

// test("should render the logo", () => {
//   renderNavbar();
//   const logoImage = screen.getByAltText(/logo/i);
//   expect(logoImage).toBeInTheDocument();
// });

test("check if clicking the logo triggers handleBack", () => {
  renderNavbar();
  const logoImage = screen.getByAltText(/logo/i);

  fireEvent.click(logoImage);
  expect(handleBack).toHaveBeenCalledTimes(1);
});

// test("verify if the logo image has the correct src attribute", () => {
//   renderNavbar();
//   const logoImage = screen.getByAltText(/logo/i);
//   expect(logoImage).toHaveAttribute(
//     "src",
//     "https://www.locatis.eu/images/tn_locatis_logo.PNG"
//   );
// });

// test("verificar se o link direciona para a home page", () => {
//   renderNavbar();
//   const homeLink = screen.getByTestId("testLink");
//   expect(homeLink).toBeInTheDocument();
// });
