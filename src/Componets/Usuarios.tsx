import { UseUsuarios } from '../hook/UseUsuarios';
import { User } from '../Interfaces/ReqRes';

export const Usuarios = () => {

  const {Usuarios, PagSiguiente, PagAnterior}= UseUsuarios();//Custom hook EXTRAER FUNCIONES DE OTRA CARPETA .TSX

  //Funcion donde extrae ciertas variables de ReqResListado(User) y agregarlo en mi tabla
  const renderItem= ({id, first_name,email,last_name,avatar}: User) => {
      return(
        <tr key={id.toString()}>
            <td><img src={avatar} alt={first_name} style={{width: 50,borderRadius: 100}}/></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
        )
  }


  return (
      <>
    <h3>Usuarios</h3>
    <table className="table">
      <thead>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Email</th>
      </thead>
      <tbody>
            {//mando a llamar a usuarios y mapeo las rutas donde llevaran cada td de mi tabla
            //utilizando una funcion renderItem
              Usuarios.map( renderItem )
            }
      </tbody>
    </table>

    <button className='btn btn-primary' onClick={PagAnterior}>
      Anterior
    </button>
    &nbsp;
    <button className='btn btn-primary' onClick={PagSiguiente}>
      Siguiente
    </button>
    </>
  )
}
