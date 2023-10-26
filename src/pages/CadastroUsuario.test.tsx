import CadastroUsuario from "./CadastroUsuario";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as create from "../function/createUser";
import "@testing-library/jest-dom";

const getTestData = () => {
  return {
    name: "User",
  };
};

test("deve renderizar  ", async () => {
  const testData = getTestData();
  const createNewUserSpy = jest.spyOn(create, "createUser");
  createNewUserSpy.mockImplementation(jest.fn());

  render(
    <BrowserRouter>
      <CartProvider>
        <CadastroUsuario />
      </CartProvider>
    </BrowserRouter>
  );
  expect(testData).toBeTruthy();
  screen.getByLabelText("Nome");

  expect(screen.getByRole("textbox", { name: "nome" })).toHaveProperty(
    "value",
    ""
  );

  // Preencher o formulário
  await userEvent.type(screen.getByRole("textbox", { name: "nome" }), "Teste");
  expect(screen.getByRole("textbox", { name: "nome" })).toHaveValue("Teste"); // não necessariamente colocaria

  await userEvent.click(screen.getByRole("button", { name: "Cadastro" }));

  expect(createNewUserSpy).toBeCalledWith({ name: "Teste" });
});
