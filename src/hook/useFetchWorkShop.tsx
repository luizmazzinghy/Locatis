import { useEffect, useState } from "react";
import workshops from "../function/workshop";

type Workshop = {
  map(
    arg0: (post: unknown) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  id: number;
  title: string;
  imageUrl: string;
  desc: string;
  category: string;
  date: string;
  price: number;
  count: number;
  setCount: number;
};

function useFecthWorkShop() {
  const [post, setPost] = useState<Workshop | undefined>();

  useEffect(() => {
    const fetchHandleCall = async () => {
      try {
        const fetchWorkShop = await workshops();
        setPost(fetchWorkShop);
      } catch (error) {
        console.log(error, "Erro ao carregar");
      }
    };

    fetchHandleCall();
  }, []);

  return post;
}
export default useFecthWorkShop;
