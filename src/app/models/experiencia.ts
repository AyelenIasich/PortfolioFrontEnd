export class Experiencia {
  id?: number;
  nombre: string;
  inicio: number;
  fin: number;
  modalidad: string;
  lugar: string;
  imagen: string;
  descripcion: string;

  constructor(
    nombre: string,
    inicio: number,
    fin: number,
    modalidad: string,
    lugar: string,
    imagen: string,
    descripcion: string
  ) {
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.modalidad = modalidad;
    this.lugar = lugar;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }
}
