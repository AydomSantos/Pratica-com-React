import React, { useState } from "react";
import "./App.css";

// Componentes

// import Contador from './componets/Contador/index';
// import FormularioCadastro from './componets/FormCadastro';


// Exercicio de cadastro de contatos 

// import FormularioContato from "./componets/FormularioContato";
// import ListaContatos from "./componets/ListaContatos";

// ================================================================

// Controle de Estoque

import FormularioProduto from './componets/FormularioProduto';
import ListaProdutos from './componets/ListaProdutos';


// ================================================================

function App() {

  // funcionalidade form de contatos
  /*

  const [contatos, setContatos] = useState([]);

  const adicionarContato = (novoContato) => {
    setContatos([...contatos, novoContato]);
  };

  const removerContato = (index) => {
    setContatos(contatos.filter((_, i) => i !== index));
  };

  */

  // ========================================

  // Funcionalidade do controle de estoque

  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  const removerProduto = (index) => {
    const novosProdutos = [...produtos];
    novosProdutos.splice(index, 1);
    setProdutos(novosProdutos);
  };
  // ==============================================


  
  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <FormularioProduto adicionarProduto={adicionarProduto}/>
      <ListaProdutos produtos={produtos} removerProduto={removerProduto}/>
    </div>
  );
}

export default App;
