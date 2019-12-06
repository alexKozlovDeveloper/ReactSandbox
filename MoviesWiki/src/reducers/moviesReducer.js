import { UPDATE_MOVIES, UPDATE_SEARCH_BY, UPDATE_SELECTED_ITEM, UPDATE_SORT_BY, SORT_MOVIES, UPDATE_SEARCH_TEXT, LOADING } from '../actions/actionTypes';

const initialState = {
    searchText: '',
    searchBy: 'title',
    sortBy: 'vote_average',
    isLoaded: false,
    movies: [],
    selectedItem: null 
  }

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_SELECTED_ITEM:
        return {
          ...state,
          selectedItem: action.selectedItem,
        }

       case UPDATE_MOVIES:
         return {
          ...state,
          isLoaded: true,
          movies: action.movies
        }
        
        case UPDATE_SEARCH_TEXT:
          return {
            ...state,
            searchText: action.searchText,
          }

        case UPDATE_SEARCH_BY:
          return {
            ...state,
            searchBy: action.searchBy
          }

        case LOADING:
            return {
              ...state,
              isLoaded: false
            }
          
        case UPDATE_SORT_BY:
          return {
            ...state,
            sortBy: action.sortBy
          }

        case SORT_MOVIES:
          function compare( a, b ) {
            if ( a[state.sortBy] < b[state.sortBy] ){
              return -1;
            }
            if ( a[state.sortBy] > b[state.sortBy] ){
              return 1;
            }
            return 0;
          }

          let sortedMovies = state.movies.concat([]);
          sortedMovies.sort(compare);

          return {
            ...state,
            movies: sortedMovies
          }

      default:        
        return initialState
    }
  }
  
export default moviesReducer
