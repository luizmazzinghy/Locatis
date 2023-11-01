import { CartProvider } from "../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Compras from "./Compras";

type ComprasData = {
  numeroCartao: string;
  nomeImpresso: string;
  dataValidade: string;
  numeroSeguranca: string;
  cpf: string;
  email: string;
};

const dataCompras = (): ComprasData => {
  return {
    numeroCartao: "1",
    nomeImpresso: "Luiz Felippe Mazzinghy",
    dataValidade: "09/28",
    numeroSeguranca: "203",
    cpf: "08550734624",
    email: "luiz@gmail.com",
  };
};

test.only("verificar se os numero do cartao esta sendo passado corretamente", async () => {
  const compras = dataCompras();
  render(
    <BrowserRouter>
      <CartProvider>
        <Compras />
      </CartProvider>
    </BrowserRouter>
  );

  const numeroCartaoInput = screen.getByTestId("numeroCartao");
  await userEvent.type(numeroCartaoInput, compras.numeroCartao);

  const cpfInput = screen.getByTestId("cpf");
  await userEvent.type(cpfInput, compras.cpf);

  const nomeImpressoInput = screen.getByTestId("nomeImpresso");
  await userEvent.type(nomeImpressoInput, compras.nomeImpresso);

  const dataValidadeInput = screen.getByTestId("dataValidade");
  await userEvent.type(dataValidadeInput, compras.dataValidade);

  const emailInput = screen.getByTestId("email");
  await userEvent.type(emailInput, compras.email);

  const numeroSegurancaInput = screen.getByTestId("numeroSeguranca");
  await userEvent.type(numeroSegurancaInput, compras.numeroSeguranca);

  expect(numeroCartaoInput).toHaveValue(compras.numeroCartao);
  expect(cpfInput).toHaveValue(compras.cpf);
  expect(nomeImpressoInput).toHaveValue(compras.nomeImpresso);
  expect(dataValidadeInput).toHaveValue(compras.dataValidade);
  expect(emailInput).toHaveValue(compras.email);
  expect(numeroSegurancaInput).toHaveValue(compras.numeroSeguranca);

  await userEvent.click(screen.getByRole("button", { name: "Enviar" }));

  expect(numeroCartaoInput).toHaveValue("");
  expect(cpfInput).toHaveValue("");
  expect(nomeImpressoInput).toHaveValue("");
  expect(dataValidadeInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
  expect(numeroSegurancaInput).toHaveValue("");
});
