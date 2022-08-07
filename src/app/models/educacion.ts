export class Educacion {
  id?: number;
  url?: string;
  titleUrl?: string;
  modalidad?: string;
  descripcion?: string;
  nombre: string;
  inicio: number;
  fin: number;
  titulo: string;
  imagen: string;


  constructor(
    nombre: string,
    inicio: number,
    fin: number,
    titulo: string,
    imagen: string,
    url: string,
    titleUrl: string,
    modalidad: string,
    descripcion: string

  ) {
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.titulo = titulo;
    this.imagen = imagen;
    this.url = url;
    this.titleUrl = titleUrl;
    this.modalidad = modalidad;
    this.descripcion = descripcion;

  }
}
