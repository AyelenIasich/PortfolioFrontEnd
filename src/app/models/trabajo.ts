export class Trabajo {
  id?: number;
  tituloTrab: string;
  inicioTrab: number;
  finTrab: number;
  descripcionTrab: string;
  urlTrab: string;
  direccionTrab?: string;

  constructor(

    tituloTrab: string,
    inicioTrab: number,
    finTrab: number,
    descripcionTrab: string,
    urlTrab: string,
    direccionTrab: string
  ) {

    this.tituloTrab = tituloTrab;
    this.inicioTrab = inicioTrab;
    this.finTrab = finTrab;
    this.descripcionTrab = descripcionTrab;
    this.urlTrab = urlTrab;
    this.direccionTrab = direccionTrab;
  }
}
