import {createAction, props} from'@ngrx/store';
import {Item} from '../models/item.model'

export enum ActionTypes {
    ApiSuccess = '[Item API] API success',
    InvokeApi = '[Item API] Invoke API'
}

export const retrieveItem=createAction(
    ActionTypes.ApiSuccess,
    props<{allItem:Item[]}>()
);

export const invokeItemAPI=createAction(
    ActionTypes.InvokeApi
);