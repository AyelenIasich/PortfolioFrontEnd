export class Trabajo {
  id?: number;
  direccionTrab: string;
  tituloTrab: string;
  inicioTrab: number;
  finTrab: number;
  descripcionTrab: string;
  urlTrab: string;


  constructor(
    direccionTrab: string,
    tituloTrab: string,
    inicioTrab: number,
    finTrab: number,
    descripcionTrab: string,
    urlTrab: string
  ) {
    this.direccionTrab = direccionTrab;
    this.tituloTrab = tituloTrab;
    this.inicioTrab = inicioTrab;
    this.finTrab = finTrab;
    this.descripcionTrab = descripcionTrab;
    this.urlTrab = urlTrab;
  }
}
