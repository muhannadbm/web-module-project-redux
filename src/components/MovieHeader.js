import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToggleFavorites } from '../actions/favoritesActions';
export const MovieHeader = (props) => {
    const appTitle = props.title;
    const displayFavorites = true;
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={()=>props.ToggleFavorites()} className="btn btn-sm btn-primary"><span>{ props.displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}
function mapPropstoState(state){
    return {
title: state.movieReducer.appTitle,
displayFavorites: state.favoritesReducer.displayFavorites
}}
export default connect(mapPropstoState, {ToggleFavorites})(MovieHeader)