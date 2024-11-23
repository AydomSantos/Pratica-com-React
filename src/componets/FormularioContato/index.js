import React, { useState } from 'react';
import './formcontatos.css'

export default function FormularioContato({ adicionarContato }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const enviarFormulario = (e) => {
    e.preventDefault();
    adicionarContato({ nome, telefone });
    setNome('');
    setTelefone('');
  };

  return (
    <form onSubmit={enviarFormulario}>
      <input 
        type="text" 
        placeholder="Nome" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Telefone" 
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <button type="submit">Adicionar Contato</button>
    </form>
  );
}

