import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Compras.module.css";
import { NewUser, createUser } from "../function/createUser";

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<NewUser>({
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
    console.log("AQUI");
    e.preventDefault();

    // if (formData.senha !== formData.repetirSenha) {
    //   alert("As senhas não coincidem");
    //   return;
    // }

    try {
      console.log({ formData });
      const response = createUser(formData);

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
      return;
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
        <h1>CadastroUsuario</h1>
        <label htmlFor="nome" aria-label="Nome">
          <span>Nome</span>
        </label>
        <input
          aria-label="cadastroNome"
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}

          // required
        />
        <label htmlFor="Sobrenome">
          <span>SobreNome</span>
        </label>
        <input
          aria-label="sobreNome"
          type="text"
          name="sobreNome"
          placeholder="sobreNome"
          value={formData.sobreNome}
          onChange={handleChange}
          // required
        />
        <label htmlFor="email" aria-label="Email">
          <span>Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          // required
        />
        <label htmlFor="data">
          <span>Data</span>
        </label>
        <input
          aria-label="Data de Nascimento"
          type="date"
          name="dateNacimento"
          placeholder="Data Nacimento"
          value={formData.dateNacimento}
          onChange={handleChange}
          // required
        />
        <label htmlFor="endereco" aria-label="Endereco">
          <span>Endereco</span>
        </label>
        <input
          type="text"
          name="endereco"
          placeholder="Digite seu endereco"
          value={formData.endereco}
          onChange={handleChange}
          // required
        />
        <label htmlFor="senha" aria-label="Senha">
          <span>Senha</span>
        </label>
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          // required
        />
        <label htmlFor="repetirSenha" aria-label="Repetir Senha">
          <span>Repetir Senha</span>
        </label>
        <input
          type="password"
          name="repetirSenha"
          placeholder="Repetir a senha"
          value={formData.repetirSenha}
          onChange={handleChange}
          // required
        />
        <button type="submit">
          <span>Cadastro</span>
        </button>
        <button onClick={handleBack}>Fechar</button>
      </form>
    </div>
  );
};

export default Cadastro;
