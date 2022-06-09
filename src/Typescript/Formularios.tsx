import { UseForm } from '../hook/UseForm';


export const Formularios = () => {
    const {Formulario, email, password ,onChange}=UseForm({
        email: 'test654@gmail.com',
        password:'6516951'
    })

  return (
      <>
    <h3>Formularios</h3>
    <input  
            type="text" 
            className="form-control"
            placeholder="Test8@gmail.com"
            value={email}
            //value={Formulario.email}//dentro de la funcion Formulario extrae email
            //mandamos a llamar a onChange 
            onChange = {({target}) => onChange(target.value, 'email')}
    />



    <input  
            type="text" 
            className="form-control"
            placeholder="Test8@gmail.com"
            value={password}
            //value={Formulario.password}//dentro de la funcion Formulario extrae password
            //mandamos a llamar a onChange 
            onChange = {({target}) => onChange(target.value, 'password')}
    
    />
        {/*MODO VISUAL EN ETIQUETAS H3*/}
        <h3>Email: {Formulario.email}</h3>
        <h3>Contraseña: {Formulario.password}</h3>

        {/*MODO VISUAL EN ETIQUETAS DE CODIGO*/}
        <code>
            <pre >{JSON.stringify(Formulario,null,2)}</pre>
        </code>
    </>
  )
}
