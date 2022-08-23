export class Proyecto {
  id?: number;
  tituloProyecto:string;
  tecnologias: string;
  descripcionProyecto: string;
  urlImagen: string;
  urlProyecto: string;
  urlRepositorio: string;



  constructor(
    tituloProyecto: string,
    tecnologias: string,
    descripcionProyecto: string,
    urlImagen: string,
    urlProyecto: string,
    urlRepositorio: string,


  ) {
    this.tituloProyecto = tituloProyecto;
    this.tecnologias = tecnologias;
    this.descripcionProyecto = descripcionProyecto;
    this.urlImagen = urlImagen;
    this.urlProyecto = urlProyecto;
    this.urlRepositorio = urlRepositorio;

  }

}
