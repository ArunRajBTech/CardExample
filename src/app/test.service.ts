import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from 'src/models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public getData():Observable<Item[]> {
  return this.http.get<Item[]>('/assets/files.json');
  }
}
