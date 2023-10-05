import api from "./api";

const usuario = async () => {
  try {
    const response = await api.get("http://localhost:5000/Usuario");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error;
  }
};

export default usuario;
