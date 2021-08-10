import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import {removeFavorite} from '../actions/favoritesActions'


export const FavoriteMovieList = (props) => {
    const favorites = [];
    return (props.displayFavorites ? <div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={()=> {props.removeFavorite(movie.id)}} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div> : null);
}
const mapPropstoState = (state) => {
    return({
        favorites: state.favoritesReducer.favorites,
        displayFavorites: state.favoritesReducer.displayFavorites
    })
}

export default connect(mapPropstoState, {removeFavorite})(FavoriteMovieList);