import axios from "axios";

export interface NewUser {
  nome: string;
  sobreNome: string;
  email: string;
  dateNacimento: string;
  endereco: string;
  senha: string;
  repetirSenha: string;
}

export const createUser = async (newUser: NewUser) => {
  const response = await axios.post("http://localhost:5000/usuarios", newUser);
  console.log("createUser: ", response);
  return response.data;
};
