import { useContext } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { CartContext } from "../context/CartContext";

import style from "./home.module.css";

import useFecthWorkShop from "../hook/useFetchWorkShop";

interface Workshop {
  _id: number;
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
        {post.map((posts) => (
          <div key={posts._id}>
            <div className={style.containerDiv}>
              {}
              <h3 className={style.title}>{posts.title}</h3>
              <img className={style.img} src={posts.imageUrl} alt="imagem" />
              {posts.desc}
              {posts.category}
              <div>{posts.date}</div>
              <div className={style.price}>
                R$: {posts.price}
                <div>ID:{posts._id}</div>
                <button
                  onClick={() => {
                    addCartItem(posts._id, 1);
                  }}
                >
                  <BiPlus />
                </button>
                <button
                  onClick={() => {
                    removeCartItem(posts._id, 1);
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
