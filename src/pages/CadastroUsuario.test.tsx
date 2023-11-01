import CadastroUsuario from "./CadastroUsuario";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as create from "../function/createUser";
import "@testing-library/jest-dom";

const getTestData = () => {
  return {
    nome: "luiz felippe",
    sobreNome: "mazzinghy",
    email: "user@gmail.com",
    dateNacimento: "13/09/2023",
    endereco: "rua ica",
    senha: "123456",
    repetirSenha: "123456",
  };
};

test("verificar se as informcoes estao sendo passadas corretamente  ", async () => {
  const testData = getTestData();
  const createNewUserSpy = jest.spyOn(create, "createUser");
  createNewUserSpy.mockImplementation(jest.fn());

  const { debug } = render(
    <BrowserRouter>
      <CartProvider>
        <CadastroUsuario />
      </CartProvider>
    </BrowserRouter>
  );

  // Verifica se os campos de entrada são renderizados
  const nomeInput = screen.getByRole("textbox", { name: "cadastroNome" });
  const dateNacimentoInput = screen.getByTestId("DateNacimento");
  const sobreNomeInput = screen.getByRole("textbox", { name: "sobreNome" });
  const emailInput = screen.getByRole("textbox", { name: "Email" });
  const enderecoInput = screen.getByRole("textbox", { name: "Endereco" });
  const senhaInput = screen.getByTestId("Senha");
  const repetirSenhaInput = screen.getByTestId("RepetirSenha");

  await userEvent.type(nomeInput, testData.nome);
  await userEvent.type(dateNacimentoInput, testData.dateNacimento);
  await userEvent.type(sobreNomeInput, testData.sobreNome);
  await userEvent.type(emailInput, testData.email);
  await userEvent.type(enderecoInput, testData.endereco);
  await userEvent.type(senhaInput, testData.senha);
  await userEvent.type(repetirSenhaInput, testData.repetirSenha);

  await userEvent.click(screen.getByRole("button", { name: "Cadastro" }));

  // Verifica se a função createUser foi chamada com os argumentos corretos
  expect(createNewUserSpy).toBeCalledWith({
    nome: testData.nome,
    dateNacimento: testData.dateNacimento,
    email: testData.email,
    endereco: testData.endereco,
    repetirSenha: testData.repetirSenha,
    senha: testData.senha,
    sobreNome: testData.sobreNome,
  });

  debug();
});
