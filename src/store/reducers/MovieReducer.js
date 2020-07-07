import {ADD_MOVIE, FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED,
    UPDATE_MOVIE, UPDATE_SUCCEEDED} from '../actions/action-types/MovieActionType';

const movieState = {
    movie: {
        name: '',
        releaseYear: ''
    },
    movies: []
};

const MovieReducer = (state = movieState, action) => {
    switch (action.type) {
        // case ADD_MOVIE:
        //     console.log(ADD_MOVIE, action)
        //     return {...state, movies: [...state.movies, action.newMovie]};
        // case UPDATE_MOVIE:
        case FETCH_MOVIE:
            return {...state};
        case FETCH_FAILED:
            alert('FETCH_FAILED')
            return {...state, movies: []};
        case FETCH_SUCCEEDED:
            return {...state, movies: action.movies};
        case UPDATE_SUCCEEDED:
            const {id, name, releaseYear} = action.updatedMovie

            const movies = state.movies.map(item => (item.id == id) ? {
                ...item, name: name, releaseYear: releaseYear
            }: item)

            return {...state, movies: movies};
        default: return state
    }

    return state;
};

export default MovieReducer;
