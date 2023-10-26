import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasicService {
  url = 'http://localhost:8080/quizzeducation/api';
  constructor(private http: HttpClient) {}
  public getList(object: string): Observable<any> {
    const url = `${this.url}/${object}`;
    return this.http.get<any>(url);
  }
}
