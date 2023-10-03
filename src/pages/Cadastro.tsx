import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Compras.module.css";

interface FormData {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  repetirSenha: string;
}

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    repetirSenha: "",
  });

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.senha !== formData.repetirSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/workshops",
        formData
      );

      setFormData({
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
        senha: "",
        repetirSenha: "",
      });

      console.log(response);
      alert("Cadastro realizado com sucesso");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <label htmlFor="cpf">CPF:</label>
        <input
          type="number"
          name="cpf"
          placeholder="Digite o cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="telefone">Telefone</label>
        <input
          type="number"
          name="telefone"
          placeholder="Digite o seu telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          placeholder="Digite uma senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
        <label htmlFor="repetirSenha">Repita a senha</label>
        <input
          type="password"
          name="repetirSenha"
          placeholder="Repita a senha"
          value={formData.repetirSenha}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastro</button>
        <button onClick={handleBack}>Fechar</button>
      </form>
    </div>
  );
};

export default Cadastro;
