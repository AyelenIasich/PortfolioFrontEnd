import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {



  aboutURL = 'https://myportfolioayeleniasich.herokuapp.com/about/';

  constructor(private httpClient: HttpClient) {}


  public detail(id: number): Observable<About> {
    return this.httpClient.get<About>(this.aboutURL + `detail/${id}`);
  }
  public save(about:About ): Observable<any> {
    return this.httpClient.post<any>(this.aboutURL + 'create', about);
  }

  public update(id: number, about: About): Observable<any> {
    return this.httpClient.put<any>(this.aboutURL + `update/${id}`, about);
  }
}
