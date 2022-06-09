import { useState } from 'react'


    //EL T generico extiende a Objeto entonses Formulario es igual al generico extendo a T
export const UseForm = <T extends Object>(Formulario: T) => {
    //formulario valori inicial, setFormulario cambio futuro
    const [state, setstate] = useState(Formulario)
        //campo es igual a llave del generico T ya que si el nombre y apellido sea objeto nombre y apellido
        //si agrepas nombs y aps marcara error ya que no tiene igualdad a nombre y apellido
    const onChange = (value:string , campo:keyof T) => {
        setstate({
        ...state,//desestructurar formulario
        [campo]:value
        })
    }

    return{
        ...state,//desestructurar para enviar directamente sus parametros email y password
        Formulario:state,
        onChange
    }
}
