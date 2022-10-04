import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectMapper } from 'json-object-mapper';

import { Item } from 'src/models/item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public getData() {
  return this.http.get<Item[]>('/assets/files.json');
  }
}
