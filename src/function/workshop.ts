import api from "./api";

const workshops = async () => {
  const response = await api.get("http://localhost:5000/workshops");
  console.log(response, "ResponseWorshop");

  return response.data;
};

export default workshops;
