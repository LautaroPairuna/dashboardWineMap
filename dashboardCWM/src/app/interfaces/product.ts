export class Product {
    id?: number;
    producto: string;
    foto: string;
    precio: number;
    destacado: string;
    activo: string;

    constructor(producto: string, foto: string, precio: number, destacado: string, activo: string){
        this.producto = producto
        this.foto = foto
        this.precio = precio
        this.destacado = destacado
        this.activo = activo
    }
}
