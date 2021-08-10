import movies from './../data.js';
import {ADD_FAVORITE , TOGGLE_FAVORITES , REMOVE_FAVORITE} from '../actions/favoritesActions'
const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
switch(action.type){
    case ADD_FAVORITE:
        return({...state, favorites:[...state.favorites, action.payload]})
    case TOGGLE_FAVORITES:
        return({...state, displayFavorites: !state.displayFavorites})
    case REMOVE_FAVORITE:
        return({...state, favorites: state.favorites.filter(item=> item.id != action.payload)})
    default: 
    return state
}
}
export default reducer