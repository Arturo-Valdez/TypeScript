//comandos para extraer el tipado de una api
//Tener copiado la informacion de la api
//Ctrl+shift+p
//Escribir : Paste JSON as Code
//seleccionar TypeScript
//Agregar el el nombre principal que en este caso es 'ReqResListado'

export interface ReqResListado {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        User[]; //Cambiar el nombre F2
    support:     Support;
}

export interface User {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
