import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Compras.module.css";

interface FormData {
  nome: string;
  sobreNome: string;
  email: string;
  dateNacimento: string;
  endereco: string;
  senha: string;
  repetirSenha: string;
}

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    sobreNome: "",
    email: "",
    dateNacimento: "",
    endereco: "",
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
        "http://localhost:5000/usuarios",
        formData
      );

      setFormData({
        nome: "",
        sobreNome: "",
        email: "",
        dateNacimento: "",
        endereco: "",
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
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <label htmlFor="sobreNome">SobreNome:</label>
        <input
          type="text"
          name="sobreNome"
          placeholder="SobreNome"
          value={formData.sobreNome}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="data">Data</label>
        <input
          type="date"
          name="dateNacimento"
          placeholder="Data Nacimento"
          value={formData.dateNacimento}
          onChange={handleChange}
          required
        />
        <label htmlFor="endereco">Endereco</label>
        <input
          type="text"
          name="endereco"
          placeholder="Digite seu endereco"
          value={formData.endereco}
          onChange={handleChange}
          required
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
        <label htmlFor="repetirSenha">Repetir Senha</label>
        <input
          type="password"
          name="repetirSenha"
          placeholder="Repetir a senha"
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
