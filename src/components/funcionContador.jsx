import React from 'react'
import { useState } from 'react';

function FuncionContador() {
    const [contador, setContador] = useState (0) ;
    const incrementar = () =>{
        setContador (contador  + 1);
    }
    const decrementar = ()  =>{
        setContador(contador - 1)
    }
  return (
    
    <div>
        <h2> funcion contador</h2>
        <div>{contador}</div>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default FuncionContador