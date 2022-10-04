import {createReducer, on} from '@ngrx/store';
import {Item} from '../models/item.model'
import { retrieveItem } from './item.action';

export const initialState:Item[]=[];

const _itemReducer=createReducer(
    initialState,
on(retrieveItem,(state,{allItem})=>{
    return [...allItem]
})
);

export function itemReducer(state:any,actions:any){
    return _itemReducer(state,actions)
}