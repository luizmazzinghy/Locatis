import { useContext, useState } from "react";
import Modal from "react-modal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import style from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

import { BiMinus, BiPlus } from "react-icons/bi";
import { useFecthWorkShop } from "../hook/useFetchWorkShop";

if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#root");
}

interface NavbarProps {
  handleBack: () => void; // Defina o tipo da prop handleBack
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, clearCart, addCartItem, removeCartItem } =
    useContext(CartContext);
  const navigate = useNavigate();

  const post = useFecthWorkShop();
  console.log(post, "Post");
  console.log(cartItems, "Itens card");

  const handleClick = () => {
    navigate("/compras", { state: { total } });
    handleCloseCart();
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleClickCadastro = () => {
    navigate("/cadastro");
  };
  const handleClickCadastroUsuario = () => {
    navigate("/cadastroUsuario");
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const getTitleById = (productId: number) => {
    const postItem = post?.find(
      (item: { _id: number }) => item._id === productId
    );
    return postItem ? postItem.title : "Título não encontrado";
  };

  const getPriceById = (productId: number) => {
    const postItem = post?.find(
      (item: { _id: number }) => item._id === productId
    );
    return postItem ? postItem.price : 0;
  };

  const total = cartItems.reduce((acc, item) => {
    const price = getPriceById(item.productId);
    console.log(price, "Price");
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className={style.container}>
      <div className={style.fixedNavbar}>
        <img
          className={style.logo}
          src="https://www.locatis.eu/images/tn_locatis_logo.PNG"
          alt="logo"
          role="button"
          onClick={handleBack}
        />
        <button onClick={handleClickCadastro}>Cadastro</button>
        <button onClick={handleClickCadastroUsuario}>Usuario</button>

        <div className={style.btn3}>
          <div>
            <button onClick={handleOpenCart} className={style.btnCarr}>
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <Modal
        className={style.modal}
        isOpen={isCartOpen}
        onRequestClose={handleCloseCart}
        contentLabel="Carrinho de Compras"
        ariaHideApp={false}
      >
        <h2>Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.productId}>
                  <p>Título: {getTitleById(item.productId)}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <div>
                    <button
                      onClick={() => {
                        addCartItem(item.productId, 1);
                      }}
                    >
                      <BiPlus />
                    </button>
                    <button
                      onClick={() => {
                        removeCartItem(item.productId, 1);
                      }}
                    >
                      <BiMinus />
                    </button>
                  </div>

                  <p>Preço Unitário: R$ {getPriceById(item.productId)}</p>
                  <p>
                    Preço Total: R$
                    {getPriceById(item.productId) * item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <p>Total: R$ {total}</p>
          </div>
        )}
        <button onClick={handleClick}>Comprar</button>
        <button onClick={clearCart}>Limpar Carrinho</button>
        <button onClick={handleCloseCart}>Fechar</button>
      </Modal>
    </div>
  );
};

export default Navbar;
