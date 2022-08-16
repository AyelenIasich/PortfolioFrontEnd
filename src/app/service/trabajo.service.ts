import { HttpClient} from '@angular/common/http';
import {Trabajo} from '../models/trabajo';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  trabajoURL = environment.trabajoURL;


  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(this.trabajoURL + 'lista')
  }
  public detail(id: number):Observable<Trabajo>{
    return this.httpClient.get<Trabajo>(this.trabajoURL + `detail/${id}`)
  }
  public save(trabajo: Trabajo): Observable<any>{
    return this.httpClient.post<any>(this.trabajoURL + 'create', trabajo);
  }

  public update(id: number, trabajo: Trabajo): Observable<any>{
    return this.httpClient.put<any>(this.trabajoURL + `update/${id}`, trabajo);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.trabajoURL + `delete/${id}`);
  }

}
