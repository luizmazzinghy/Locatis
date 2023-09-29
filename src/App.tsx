import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import { Route, Routes } from "react-router-dom";
import Compras from "./pages/Compras";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div>
      <CartProvider>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compras" element={<Compras />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </>
      </CartProvider>
    </div>
  );
}

export default App;
