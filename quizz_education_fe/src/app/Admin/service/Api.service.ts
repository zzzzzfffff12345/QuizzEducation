import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponent {

  private REST_API_VF = "http://localhost:8080/vietfurniture/api";


  constructor(private httpClient: HttpClient) { }

  public getList(nameApi: string): Observable<any> {
    const url = `${this.REST_API_VF}/${nameApi}`;
    return this.httpClient.get<any>(url);
  }
}
