import {GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types';
import axios from 'axios';
 
//thunk allows us to use dipatch like this
export const getItems = () => async dispatch => {
    try{
        await dispatch(setItemsLoading()); //calling the function to set loading to true

        // we added proxy to package.json that allows us to write /api/items than localhost:8000/api/items 
        const res = await axios.get('/api/items');
            
        dispatch({
            type: GET_ITEM,
            payload: res.data.items
        });

    } catch (err){
        console.log(err);
        // dispatch(err);
    }
        

}


export const deleteItem = (id) => async dispatch =>{
    try{
        const res = await axios.delete(`/api/items/destroy/${id}`);
        dispatch({
            type: DELETE_ITEM,
            payload: id //seding back id to reducer to delete item from frontend
        });
    } catch (err){
        console.log(err);
    }
    
}

export const addItem = (item)=>async dispatch =>{
    try{
        const res = await axios.post('/api/items/create',item);
        dispatch({
            type: ADD_ITEM,
            payload: res.data.item
        });
    } catch (err){
        console.log(err);
    }
    
}

export const setItemsLoading = ()=>{
    return {
        type: ITEMS_LOADING
    }
}