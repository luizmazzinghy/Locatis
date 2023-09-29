import React, { useContext } from "react";
import { Context } from "../context/CartContext";

const teste = () => {
  const { state, setState } = useContext(Context);

  return (
    <div>
      <h1>Nome: {state}</h1>
    </div>
  );
};

export default teste;
