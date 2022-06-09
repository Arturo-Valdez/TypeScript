export const TiposBasicos = () => {
    const nombre: string ='Santiago';
    const numero: number = 45456;
    const estaactivo: boolean = false;

    const poderes = [];
    //const poderes:(string|number)[] = [];
    //const poderes:string[] = [];//'Velocidad', 'Volar', 'Teleport'
    poderes.push('Velocidad', 'Volar', 'Teleport',654);

  return (
    <>
        <h3>Tipos Basicos</h3>
        {nombre}, {numero}, {(estaactivo) ? 'activo' : 'no activo'}
        <br />
        {poderes.join(', ')}
    </>
  )
}
