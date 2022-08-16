export class About {
  id?: number;
  tituloAbout?: string;
  subtituloAbout?: string;
  descripcionAbout?: string;
  parrafoAbout?: string;
  parrafo2About?: string;
  imagenAbout?: string;

  constructor(
    tituloAbout: string,
    subtituloAbout: string,
    descripcionAbout: string,
    parrafoAbout: string,
    parrafo2About: string,
    imagenAbout: string
  ) {
    this.tituloAbout = tituloAbout;
    this.subtituloAbout = subtituloAbout;
    this.descripcionAbout = descripcionAbout;
    this.parrafoAbout = parrafoAbout;
    this.parrafo2About = parrafo2About;
    this.imagenAbout = imagenAbout;
  }
}
