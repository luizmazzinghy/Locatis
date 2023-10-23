import { useEffect, useState } from "react";
import workshops from "../function/workshop";

type Workshop = {
  _id: number;
  title: string;
  imageUrl: string;
  desc: string;
  category: string;
  date: string;
  price: number;
  count: number;
  setCount: number;
};

export function useFecthWorkShop() {
  const [post, setPost] = useState<Workshop[] | null>(null);

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
