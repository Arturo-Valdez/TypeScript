import { useEffect, useRef, useState } from 'react';
import { ReqResApi } from '../API/ReqRes';
import { ReqResListado, User } from "../Interfaces/ReqRes";


export const UseUsuarios = () => {

      //Crear una constante useState que sea del tipo (User[] = significa que dentro de ReqResListado se
  // encuentra User que es una interfas de tipados)
  const [Usuarios, setUsuarios] = useState<User[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    //llAMADO API - Interfaces(ReqResListado), tambien utilizado para saber sus tipados
    //tomando la informacion de /users. siempre, muestra como respuesta en consola
    //Respuesta.masdatos.masdatosespecificos,con el indicex.Last_namex
    ReqResApi.get<ReqResListado>('/users')
      //.then(resp => {

        //setUsuarios(resp.data.data);
     // }).catch(console.log);//si no es funcional manda error
     CargaUsers();
      
  }, [])


  const CargaUsers = async()=>{
    const resp = await ReqResApi.get<ReqResListado>('/users',{
      params:{
        page: paginaRef.current
      }
    })
    if(resp.data.data.length>0){//respuesta en datos, dentro de datos, contador es mayor que 00
      setUsuarios(resp.data.data);//Capturar usuarios de respuesta, dentro de datos, dentro de datos
    }else{
      paginaRef.current--;//sino paginaRef.current resta
      alert('No hay mas registros')//mostrar alerta
    }
  }


    const PagSiguiente = () =>{
      paginaRef.current++;
      CargaUsers()
    }

    const PagAnterior = () =>{
      if(paginaRef.current > 1){
        paginaRef.current--;
        CargaUsers();
      }
    }

  
  return {
    Usuarios,
    PagSiguiente,
     PagAnterior,
  }
}
