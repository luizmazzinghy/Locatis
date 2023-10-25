import { useContext, useState } from "react";
import Modal from "react-modal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import style from "./Navbar.module.css";

import { BiMinus, BiPlus } from "react-icons/bi";
import { useFecthWorkShop } from "../hook/useFetchWorkShop";
import { Link } from "react-router-dom";

if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#root");
}

interface NavbarProps {
  handleBack: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, clearCart, addCartItem, removeCartItem } =
    useContext(CartContext);

  const post = useFecthWorkShop();

  const handleClick = () => {
    // navigate("/compras", { state: { total } });
    handleCloseCart();
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
        <Link to="/">
          <img
            className={style.logo}
            src="https://www.locatis.eu/images/tn_locatis_logo.PNG"
            alt="logo"
          />
        </Link>

        <Link to="/cadastro" data-test="testLink">
          <button>Cadastro</button>
        </Link>

        <Link to="/cadastroUsuario">
          <button>Usuario</button>
        </Link>

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

        <Link
          to={{
            pathname: "/compras",
            // state: { total },
          }}
        >
          <button onClick={handleClick}>Comprar</button>
        </Link>

        <button onClick={clearCart}>Limpar Carrinho</button>
        <button onClick={handleCloseCart}>Fechar</button>
      </Modal>
    </div>
  );
};

export default Navbar;
