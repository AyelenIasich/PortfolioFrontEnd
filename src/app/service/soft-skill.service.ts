import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { SoftSkill } from '../models/soft-skill';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillService {
  softSkillURL = 'https://myportfolioayeleniasich.herokuapp.com/softskill/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<SoftSkill[]> {
    return this.httpClient.get<SoftSkill[]>(this.softSkillURL + 'lista');
  }

  public detail(id: number):Observable<SoftSkill>{
    return this.httpClient.get<SoftSkill>(this.softSkillURL + `detail/${id}`)
  }

  public save(softSkill: SoftSkill): Observable<any>{
    return this.httpClient.post<any>(this.softSkillURL + 'create', softSkill);
  }

  public update(id: number, softSkill: SoftSkill): Observable<any>{
    return this.httpClient.put<any>(this.softSkillURL + `update/${id}`, softSkill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.softSkillURL + `delete/${id}`);
  }

}
