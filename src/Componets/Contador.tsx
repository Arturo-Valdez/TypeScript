import { useState } from 'react';

export const Contador = () => {

    const [Valor, setValor] = useState(0);

    const acumular=(numero:number) =>{
        setValor(Valor + numero);
    }

  return (
      <>
    <h3>Contador: <small>{Valor}</small></h3>
    <button className='btn btn-primary' onClick={ () => acumular(1)}>
        +1
    </button>
    &nbsp;
    <button className='btn btn-primary' onClick ={ () => acumular(-1)}>
        -1
    </button>
    </>
  )
}
