import React from "react";
import "./style.css";

export default function ListaProdutos({ produtos, removerProduto }) {
  return (
    <ul>
      {produtos.map((produto, index) => (
        <li key={index} className="produto-item">
          <p className="produto-nome">{produto.nome}</p>
          <span className="produto-quantidade"> Quantidade : {produto.quantidade}</span>
          <button className="btn-remover" onClick={() => removerProduto(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}
