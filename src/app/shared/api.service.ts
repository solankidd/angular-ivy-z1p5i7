import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url = 'https://my-json-server.typicode.com/typicode/demo/posts';
  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  postRes(data:any): Observable<any>{
    return this.http.post<any>(this.url, data)
  }

  getRes(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  updateRes(data:any, id:number) {
    return this.http.put<any>(this.url+id, data);
  }

  deleteRes(id:number) {
    return this.http.delete<any>(this.url+id);
  }
}