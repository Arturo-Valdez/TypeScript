//IMPORTAMOS AXIOS YA QUE NO AYUDA A EXTRAER APIS
//EXPORTAMOS UNA CONSTANTE LLAMADA ReqResApi = creando un nuevo axios con la base de url del api
import axios, { Axios } from 'axios';

export const ReqResApi = axios.create({
    baseURL: 'https://reqres.in/api'
});