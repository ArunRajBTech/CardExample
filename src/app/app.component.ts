import { Component, OnInit } from '@angular/core';
import{select, Store} from '@ngrx/store'

import {Item} from '../models/item.model'
import { invokeItemAPI } from 'src/store/item.action';
import { itemData } from 'src/store/item.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'samplecardexample';
  sampleData$ = this._store.pipe(select(itemData));

  constructor(private readonly _store: Store<{item:Item[]}>) { }

  public ngOnInit():void{
    this._store.dispatch(invokeItemAPI());
  }
}
