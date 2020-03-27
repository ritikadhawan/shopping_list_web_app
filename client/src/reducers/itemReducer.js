import {GET_ITEM, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const intialState = {
    items: [
        {id: 1, name: 'Hello'},
        {id: 2, name: 'World'},
        {id: 3, name: 'yeah'}
    ]
}

export default (state = intialState, action)=>{
    switch(action.type){
        case GET_ITEM: 
            return {
                ...state
            };
        case 'ADD_ITEM':
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}