import {
    FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED,
    UPDATE_SUCCEEDED, DELETE_SUCCEEDED, DELETE_FAILED,
} from '../actions/action-types/MovieActionType';

const movieState = {
    movie: {
        name: '',
        releaseYear: '',
    },
    movies: [],
};

const MovieReducer = (state = movieState, action) => {
    switch (action.type) {
        case FETCH_MOVIE:
            return {...state};
        case FETCH_FAILED:
            alert('FETCH_FAILED');
            return {...state, movies: []};
        case FETCH_SUCCEEDED:
            return {...state, movies: action.movies};
        case UPDATE_SUCCEEDED:
            const {id, name, releaseYear} = action.updatedMovie;

            const movies = state.movies.map(item => (item.id == id) ? {
                ...item, name: name, releaseYear: releaseYear,
            } : item);

            return {...state, movies: movies};
        case DELETE_SUCCEEDED:
            const m = state.movies.filter(item => {
                console.log(item.id)
                console.log('action.id', action.id)
                return item.id != action.id;
            });
            console.log(DELETE_SUCCEEDED, action, m)
            return {...state, movies: m};
        case DELETE_FAILED:
            console.log(DELETE_FAILED)

            return state
        default:
            return state;
    }

    //return state;
};

export default MovieReducer;
