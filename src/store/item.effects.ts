import {Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TestService } from 'src/app/test.service';
import {map, mergeMap} from 'rxjs/operators'

@Injectable()
export class ItemEffects{
    constructor(private $action:Actions,
        private itemService:TestService){

        }

        $loadItem=createEffect(()=>
            this.$action.pipe(
               ofType('[Item API] Invoke API'),
               mergeMap(()=>
                 this.itemService.getData()
                .pipe(
                 map((data)=>({type:'[Item API] API success',allItem:data}))
              )
          )
       )
        );
}

