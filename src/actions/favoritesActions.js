export const ADD_FAVORITE = 'ADD_FAVORITE'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'


export const addFavorite = (item) => {
    return({type: ADD_FAVORITE, payload: item})
}

export const ToggleFavorites = () => {
    return({type: TOGGLE_FAVORITES})
}

export const removeFavorite = (id) => {
    return({type: REMOVE_FAVORITE, payload: id})
}
