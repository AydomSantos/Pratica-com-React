// Cotador de Click

import React, {useState} from "react";
import './contador.css';

export default function Contador(){
    const [contador, setContador] = useState(0);
   return(
    <div>
        <h1 className="contador__titulo">Contador de Numeros</h1>
        <button className="incrementar" onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button className="decrementa" onClick={() => setContador(contador - 1)}>Decrementar</button>

        <p>{contador}</p>
    </div>
   ) 
}