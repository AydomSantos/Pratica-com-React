import React from 'react';
import './listacontatos.css';

export default function ListaContatos({ contatos, removerContato }) {
  return (
    <ul>
      {contatos.map((contato, index) => (
        <li key={index}>
          {contato.nome} - {contato.telefone}
          <button onClick={() => removerContato(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}


