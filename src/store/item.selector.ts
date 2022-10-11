import {createSelector} from '@ngrx/store';
import { Item } from 'src/models/item.model';
import {AppState} from './app.state'

export const itemRootSelector=(state:AppState):Item[]=>state.item;

export const itemData=createSelector(
    itemRootSelector,
    (item:Item[])=>{
        return item;
    }
)