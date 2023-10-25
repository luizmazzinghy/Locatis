import Home from "./Home";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../hook/useFetchWorkShop", () => ({
  useFecthWorkShop: jest.fn(() => [
    {
      title: "Workshop1",
      imageUrl: "image1",
      desc: "Descricao1",
      category: "Category1",
      date: "Date1",
      price: 49.99,
    },
    {
      title: "Workshop 2",
      imageUrl: "image2.jpg",
      desc: "Descricao2",
      category: "Category2",
      date: "Date2",
      price: "99.99",
    },
  ]),
}));

function renderHome() {
  return render(
    <BrowserRouter>
      <CartProvider>
        <Home />
      </CartProvider>
    </BrowserRouter>
  );
}

test("Deve renderizar a home", () => {
  renderHome();
});

test("Deve renderizar o titulo", () => {
  renderHome();

  const workShopTitle = screen.getByText("Workshop1");
  expect(workShopTitle).toBeInTheDocument();
});

test("Deve renderizar a descricao", () => {
  renderHome();
  const workShopDescricao = screen.getByText("Descricao1");
  expect(workShopDescricao).toBeInTheDocument();
});

test("Deve renderizar o preco", () => {
  renderHome();
  const workShopPreco = screen.getByText(/49\.99/);
  expect(workShopPreco).toBeInTheDocument();
});

test("Deve renderizar a category", () => {
  renderHome();
  const workShopCategory = screen.getByText("Category1");
  expect(workShopCategory).toBeInTheDocument();
});

test("Deve renderizar a date", () => {
  renderHome();
  const workShopDate = screen.getByText("Date1");
  expect(workShopDate).toBeInTheDocument();
});

test("Deve renderizar a imagem", () => {
  renderHome();
  const workShopImage = screen.getAllByRole("img")[0];

  expect(workShopImage).toBeInTheDocument();
  expect(workShopImage).toHaveAttribute("alt", "imagem");
});

test("Deve renderizar os botoes de add cart  ", () => {
  renderHome();

  const buttons = screen.getAllByTestId("buttonAddCart");

  buttons.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
});

test("Deve renderizar os botoes de remover o cart  ", () => {
  renderHome();

  const buttons = screen.getAllByTestId("buttonRemoveCart");

  buttons.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
});
