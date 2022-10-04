import {createAction, props} from'@ngrx/store';
import {Item} from '../models/item.model'

export const retrieveItem=createAction(
    '[Item API] API success',
    props<{allItem:Item[]}>()
);

export const invokeItemAPI=createAction(
    '[Item API] Invoke API'
);