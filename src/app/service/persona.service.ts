import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  personaURL = 'https://myportfolioayeleniasich.herokuapp.com/persona/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + 'lista');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `detail/${id}`);
  }
  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.personaURL + 'create', persona);
  }
  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + `update/${id}`, persona);
  }
}
