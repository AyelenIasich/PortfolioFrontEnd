export class SoftSkill {
  id?: number;
  porcentajeSoft: number;
  urlSoft: string;
  softSkill: string;

  constructor(porcentajeSoft: number, urlSoft: string, softSkill: string) {
    this.porcentajeSoft = porcentajeSoft;
    this.urlSoft = urlSoft;
    this.softSkill = softSkill;
  }
}
