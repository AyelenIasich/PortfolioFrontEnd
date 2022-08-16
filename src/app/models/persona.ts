export class Persona {
  id?: number;
  nombre?: string;
  apellido?: string;
  titulo?: string;
  descripcionMain?: string;
  imagenMain?: string;

  constructor(
    nombre: string,
    apellido: string,
    titulo: string,
    descripcionMain: string,
    imagenMain: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.descripcionMain = descripcionMain;
    this.imagenMain = imagenMain;
  }
}
