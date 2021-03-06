import React from 'react';
import {connect} from 'react-redux';
import MovieComponent from '../components/Movie/MovieComponent';
import {addMovieAction, fetchMovieAction, updateMovieAction, delMovieAction} from '../store/actions/MovieAction';

class MovieContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        const {onAdd, onFetch, movies, onUpdate, onDel} = this.props;

        return (
            <MovieComponent movies={movies}
                            onAdd={onAdd}
                            onFetch={onFetch}
                            onUpdate={onUpdate}
                            onDel={onDel}
            />
        );
    }
}

export default connect(
    state => {
        return {
            movies: state.movie.movies,
        };
    },
    dispatch => {
        return {
            onAdd: (movie) => {
                dispatch(addMovieAction(movie));
            },
            onFetch: () => {
                dispatch(fetchMovieAction());
            },
            onUpdate: (movie) => {
                dispatch(updateMovieAction(movie));
            },
            onDel: (movie) => {
                dispatch(delMovieAction(movie));
            },
        };
    },
)(MovieContainer);
