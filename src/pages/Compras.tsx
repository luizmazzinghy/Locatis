import { useState } from "react";
import style from "./Compras.module.css";

import { useParams } from "react-router-dom";

const Compras = () => {
  const { total } = useParams();

  const [select, setSelect] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [codigo, setCodigo] = useState("");
  const [numeroCpf, setNumeroCpf] = useState("");
  const [email, setEmail] = useState("");

  console.log(numeroCpf, "cpf");
  console.log(numeroCartao, "numeroCartao");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSelect("");
    setNumeroCartao("");
    setNomeCartao("");
    setDataValidade("");
    setCodigo("");
    setNumeroCpf("");
    setEmail("");
  };

  return (
    <div className={style.body}>
      <form onSubmit={handleSubmit}>
        <div className={style.containerCompras}>
          <div className={style.titulo}>
            <h1>Formulario de compras</h1>
          </div>
          <div className={style.selectForm}>
            <label htmlFor="text">Escolha seu cartão</label>
            <select
              className={style.select}
              onChange={(e) => setSelect(e.target.value)}
              value={select}
            >
              <option value=""></option>
              <option value="masterCard" role="selectMasterCard">
                Master Card
              </option>
              <option value="visa" role="selectVisa">
                Visa
              </option>
              <option value="americanExpress" role="selectAmericanExpress">
                American Express
              </option>
              <option value="elo" role="selectElo">
                Elo
              </option>
              <option value="hiperCard" role="selectHiperCard">
                HiperCard
              </option>
            </select>
          </div>
          <div className={style.input}>
            <label htmlFor="number">Número do cartão:</label>
            <input
              data-testid="numeroCartao"
              type="text"
              required
              onChange={(e) => setNumeroCartao(e.target.value)}
              value={numeroCartao}
            />
          </div>
          <div className={style.input}>
            <label htmlFor="text">Nome impresso no cartão: </label>
            <input
              data-testid="nomeImpresso"
              type="text"
              required
              onChange={(e) => setNomeCartao(e.target.value)}
              value={nomeCartao}
            />
          </div>
          <div className={style.validacaoCartao}>
            <div>
              <label htmlFor="date">Data de validade: </label>
              <input
                data-testid="dataValidade"
                type="text"
                required
                onChange={(e) => setDataValidade(e.target.value)}
                value={dataValidade}
              />
            </div>
            <div>
              <label htmlFor="number">CVV: </label>
              <input
                data-testid="numeroSeguranca"
                type="text"
                maxLength={3}
                required
                onChange={(e) => setCodigo(e.target.value)}
                value={codigo}
              />
            </div>
            <div>
              <label htmlFor="text">CPF do portador do cartão: </label>
              <input
                data-testid="cpf"
                type="text"
                required
                onChange={(e) => setNumeroCpf(e.target.value)}
                value={numeroCpf}
              />
            </div>
          </div>
          <div className={style.input}>
            <label htmlFor="email">Email: </label>
            <input
              data-testid="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <span>R$: {total || 0}</span>
          </div>
          <div>
            <button type="submit">
              <span>Enviar</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compras;
