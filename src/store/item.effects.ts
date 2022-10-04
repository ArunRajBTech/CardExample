import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators'
import { ObjectMapper } from 'json-object-mapper';

import { TestService } from 'src/app/test.service';
import { ActionTypes } from './item.action'
import { Item } from 'src/models/item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemEffects {
    constructor(private $action: Actions,
        private itemService: TestService) {

    }

    $loadItem = createEffect(() =>
        this.$action.pipe(
            ofType(ActionTypes.InvokeApi),
            mergeMap(() =>
                this.itemService.getData()
                    .pipe(
                        map((data) => ({ type: ActionTypes.ApiSuccess, allItem: ObjectMapper.deserializeArray(Item,data) }))
                    )
            )
        )
    );
}

