import { useContext } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { CartContext } from "../context/CartContext";

import style from "./home.module.css";

import useFecthWorkShop from "../hook/useFetchWorkShop";

interface Workshop {
  id: number;
  title: string;
  imageUrl: string;
  desc: string;
  category: string;
  date: string;
  price: number;
}
type Post = Workshop;

const Home: React.FC = () => {
  const { addCartItem, removeCartItem } = useContext(CartContext);

  const post: Post[] | null = useFecthWorkShop();

  if (!post) {
    return <div>Carregando....</div>;
  }

  return (
    <div className={style.main}>
      <ul>
        {post.map((post) => (
          <div key={post.id}>
            <div className={style.containerDiv}>
              {}
              <h3 className={style.title}>{post.title}</h3>
              <img className={style.img} src={post.imageUrl} alt="imagem" />
              {post.desc}
              {post.category}
              <div>{post.date}</div>
              <div className={style.price}>
                R$: {post.price}
                <button
                  onClick={() => {
                    addCartItem(post.id, 1);
                  }}
                >
                  <BiPlus />
                </button>
                <button
                  onClick={() => {
                    removeCartItem(post.id, 1);
                  }}
                >
                  <BiMinus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
