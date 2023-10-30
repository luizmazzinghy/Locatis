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

  // Verifica se os campos de entrada são renderizados
  const nomeInput = screen.getByRole("textbox", { name: "cadastroNome" });
  // const dateNacimentoInput = screen.getByRole("textbox", {
  //   name: "Data de Nascimento",
  // });
  // const sobreNomeInput = screen.getByRole("sobreNome");
  // const emailInput = screen.getByLabelText("Email");
  // const enderecoInput = screen.getByLabelText("Endereco");
  // const senhaInput = screen.getByLabelText("Senha");
  // const repetirSenhaInput = screen.getByLabelText("Repetir Senha");

  await userEvent.type(nomeInput, testData.nome);
  // await userEvent.type(dateNacimentoInput, testData.dateNacimento);
  // await userEvent.type(sobreNomeInput, testData.sobreNome);
  // await userEvent.type(emailInput, testData.email);
  // await userEvent.type(enderecoInput, testData.endereco);
  // await userEvent.type(senhaInput, testData.senha);
  // await userEvent.type(repetirSenhaInput, testData.repetirSenha);

  await userEvent.click(screen.getByRole("button", { name: "Cadastro" }));

  // Verifica se a função createUser foi chamada com os argumentos corretos
  expect(createNewUserSpy).toBeCalledWith({
    nome: testData.nome,
    // dateNascimento: testData.dateNacimento,
    // email: testData.email,
    // endereco: testData.endereco,
    // repetirSenha: testData.repetirSenha,
    // senha: testData.senha,
    // sobreNome: testData.sobreNome,
  });
  // expect(createNewUserSpy).toBeCalledWith({
  //   dateNacimento: "",
  //   email: "",
  //   endereco: "",
  //   nome: "",
  //   repetirSenha: "",
  //   senha: "",
  //   sobreNome: "",
  // });
});
