import React, { useState } from "react";
import "./App.css";

// Componentes

// import Contador from './componets/Contador/index';
// import FormularioCadastro from './componets/FormCadastro';

import FormularioContato from "./componets/FormularioContato";
import ListaContatos from "./componets/ListaContatos";

function App() {
  const [contatos, setContatos] = useState([]);

  const adicionarContato = (novoContato) => {
    setContatos([...contatos, novoContato]);
  };

  const removerContato = (index) => {
    setContatos(contatos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <FormularioContato adicionarContato={adicionarContato} />{" "}
      <ListaContatos contatos={contatos} removerContato={removerContato} />
    </div>
  );
}

export default App;
