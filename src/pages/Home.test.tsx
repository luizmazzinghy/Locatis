import Home from "./Home";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { debug } from "console";

// const post = [
//   {
//     _id: 1,
//     title: "titulo 1",
//     imageUrl: "imagem 1",
//     desc: "descricao 1",
//     category: "categoria A",
//     date: "13-10-1986",
//     price: 99.99,
//   },
//   {
//     _id: 2,
//     title: "titulo 2",
//     imageUrl: "imagem 2",
//     desc: "descricao 2",
//     category: "categoria B",
//     date: "13-10-1998",
//     price: 47.99,
//   },
// ];

test("should ", () => {
  render(<Home />);
  //   post.forEach((post) => {
  //     expect(screen.getByText(post._id)).toBeInTheDocument();
  //   });

  debug();
});
