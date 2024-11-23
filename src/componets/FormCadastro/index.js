import React, { useState } from "react";
import "./form.css";

export default function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();
    console.log({ nome, email, senha });
  }

  return (
    <form onSubmit={enviarFormulario}>
      <h1>Formulario de Cadastro</h1>
      <input
        type="text"
        placeholder="Digite o seu Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="email"
        placeholder="Digite o Seu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="........."
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
