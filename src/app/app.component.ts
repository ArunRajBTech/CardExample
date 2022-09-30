import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';
import{select, Store} from '@ngrx/store'
import {Item} from '../models/item.model'
import { Observable } from 'rxjs';
import { invokeItemAPI } from 'src/store/item.action';
import { itemData } from 'src/store/item.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'samplecardexample';
  sampleData = this.store.pipe(select(itemData));

  constructor(private store: Store<{item:Item[]}>) { }

  ngOnInit(){
    this.store.dispatch(invokeItemAPI());
  }
}
