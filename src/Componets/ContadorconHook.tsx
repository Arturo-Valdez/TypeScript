import { UseCounter } from '../hook/UseCounter';

export const ContadorconHook = () => {

  const{Valor,acumular} = UseCounter();

  return (
      <>
    <h3>Contador con Hook: <small>{Valor}</small></h3>
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
