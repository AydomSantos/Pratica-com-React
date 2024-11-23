import React, { useState } from "react";
import "./style.css";

export default function FormularioProduto({ adicionarProduto }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");  // Altere para quantidade

  const enviarFormulario = (event) => {
    event.preventDefault();

    // Verifique se tanto o nome quanto a quantidade foram preenchidos antes de adicionar o produto
    if (nome && quantidade) {
      adicionarProduto({ nome, quantidade });
      setNome("");
      setQuantidade("");  // Limpe a quantidade após o envio
    } else {
      alert("Por favor, preencha tanto o nome quanto a quantidade do produto.");
    }
  };

  return (
    <form onSubmit={enviarFormulario}>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(event) => setQuantidade(event.target.value)}
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
}
