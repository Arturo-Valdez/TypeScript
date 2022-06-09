interface persona{
    nombrecompleto : string;
    edad:number;
    direccion:direccion          
}
interface direccion{
    pais:string;
    CasaNo:number;
}

export const ObjetosLiterales = () => {
    
    const persona:persona={
        nombrecompleto:'santiago',
        edad : 22,
        direccion:{
            pais:"canada",
            CasaNo:1100
        }
    }


  return (
      <>
    <h3>Objetos Literales</h3>
    <code><pre>
        {JSON.stringify(persona, null,2)}
        </pre></code>
    </>
  )
}
