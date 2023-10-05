import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Compras.module.css";

interface FormData {
  title: string;
  desc: string;
  price: string;
  date: string;
  category: string;
  userId: string;
  imageUrl: string;
}

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    desc: "",
    price: "",
    date: "",
    category: "",
    userId: "",
    imageUrl: "",
  });

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/workshops",
        formData
      );

      setFormData({
        title: "",
        desc: "",
        price: "",
        date: "",
        category: "",
        userId: "",
        imageUrl: "",
      });

      console.log(response);
      alert("Cadastro do curso realizado com sucesso");
    } catch (error) {
      alert("Erro ao cadastrar curso");
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
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          name="title"
          placeholder="Digite um titulo"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="desc">Descrição:</label>
        <input
          type="text"
          name="desc"
          placeholder="Digite uma descrição"
          value={formData.desc}
          onChange={handleChange}
          required
        />
        <label htmlFor="number">Preço</label>
        <input
          type="number"
          name="price"
          placeholder="Digite um preço"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label htmlFor="date">Data</label>
        <input
          type="date"
          name="date"
          placeholder="Digite uma data"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="category">Categoria</label>
        <input
          type="text"
          name="category"
          placeholder="Digite uma categoria"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <label htmlFor="number">UserId</label>
        <input
          type="number"
          name="userId"
          placeholder="Digite um userId"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <label htmlFor="imageUrl">Imagem</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Coloque url de uma imagem"
          value={formData.imageUrl}
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
