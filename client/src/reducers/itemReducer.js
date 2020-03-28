import {GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types';

const intialState = {
    items: [],
    loading: false //to keep track of data loading from backend
}

export default (state = intialState, action)=>{
    switch(action.type){
        case GET_ITEM: 
            return {
                ...state,
                items: action.payload,
                loading: false //it was set to true before making the request
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}