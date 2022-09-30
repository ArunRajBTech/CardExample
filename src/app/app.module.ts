import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { itemReducer } from 'src/store/item.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from 'src/store/item.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    StoreModule.forRoot({item:itemReducer}),
    EffectsModule.forRoot([ItemEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
