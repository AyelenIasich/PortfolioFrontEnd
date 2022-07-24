export class Educacion {

  id?: number;
  nombre: string;
  inicio: number;
  fin: number;
  titulo: string;
  lugar:string;
  imagen:string;


  constructor(nombre: string, inicio:number, fin:number, lugar:string, titulo:string, imagen:string) {
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.lugar = lugar;
    this.titulo = titulo;
    this.imagen = imagen;
  }
}
