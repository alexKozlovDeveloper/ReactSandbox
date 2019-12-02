const moviesReducer = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_SELECTED_ITEM':
        return {
          ...state,
          selectedItem: action.selectedItem,
        }

       case 'UPDATE_MOVIES':
         return {
          ...state,
          isLoaded: true,
          error: null,   
          movies: action.movies.data
        }
        
        case 'UPDATE_SEARCH_TEXT':
          return {
            ...state,
            searchText: action.searchText,
          }

        case 'UPDATE_SEARCH_BY':
          return {
            ...state,
            searchBy: action.searchBy
          }

        case 'LOADING':
            return {
              ...state,
              isLoaded: false
            }
          
        case 'UPDATE_SORT_BY':
          return {
            ...state,
            sortBy: action.sortBy
          }

        case 'SORT_MOVIES':
            function compare( a, b ) {
              if ( a[state.sortBy] < b[state.sortBy] ){
                return -1;
              }
              if ( a[state.sortBy] > b[state.sortBy] ){
                return 1;
              }
              return 0;
            }
            
            state.movies.sort( compare );

            var sortedMovies = state.movies.concat([]);

            return {
              ...state,
              movies: sortedMovies
            }

      default:
        var defaultState = {
          searchText: '',
          searchBy: 'title',
          sortBy: 'vote_average',
          isLoaded: false,
          error: null,   
          movies: [],
          selectedItem: ''  
        } 
        return defaultState
    }
  }
  
export default moviesReducer
