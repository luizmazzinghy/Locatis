import api from "./api";

const workshops = async () => {
  const response = await api.get("http://localhost:3000/workshops");
  return response.data;
};

export default workshops;
