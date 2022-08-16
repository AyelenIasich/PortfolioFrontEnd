export class Skill {
  id?: number;
  porcentaje: number;
  urlLogo: string;
  skill: string;


  constructor(
    porcentaje: number,
    urlLogo: string,
    skill: string,

  ) {
    this.porcentaje = porcentaje;
    this.urlLogo = urlLogo;
    this.skill = skill;

  }
}
