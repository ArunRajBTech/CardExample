import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get<any>('/assets/files.json')
      .toPromise()
      .then(res => <any[]>res.data);
    }
}
