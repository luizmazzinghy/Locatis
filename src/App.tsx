import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import { Route, Routes } from "react-router-dom";
import Compras from "./pages/Compras";
import Cadastro from "./pages/Cadastro";
import CadastroUsuario from "./pages/CadastroUsuario";
function App() {
  return (
    <div>
      <CartProvider>
        <>
          <Navbar
            handleOpenCart={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compras" element={<Compras />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
          </Routes>
        </>
      </CartProvider>
    </div>
  );
}

export default App;
