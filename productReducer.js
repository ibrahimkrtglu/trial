import {UPDATE_PRODUCT} from '../Actions/productsActions'

export default function productsReducer(state='',action){
    switch(action.type){
        case UPDATE_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}