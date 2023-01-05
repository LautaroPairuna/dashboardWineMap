export class Admin {
    nombre_completo: string;
    email: string;
    contrasena: string;
    email_login: string;
    contrasena_login: string;

    constructor(nombre_completo: string, email: string, contrasena: string, email_login: string, contrasena_login: string){
        this.nombre_completo = nombre_completo
        this.email = email
        this.contrasena = contrasena
        this.email_login = email_login
        this.contrasena_login = contrasena_login
    }
}