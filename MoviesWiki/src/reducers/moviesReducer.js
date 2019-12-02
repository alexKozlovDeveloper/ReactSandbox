const moviesReducer = (state = [], action) => {
    switch (action.type) {
       case 'UPDATE_MOVIES':
         //debugger;
         return {
          ...state,
          isLoaded: true,
          error: null,   
          movies: action.movies.data
        }
        
        case 'UPDATE_SEARCH_TEXT':
          //debugger;
          return {
            ...state,
            searchText: action.searchText,
          }

        case 'UPDATE_SEARCH_BY':
          debugger;

          var item = action.searchBy.toLowerCase();

          return {
            ...state,
            searchBy: item
          }

        case 'LOADING':
            //debugger;
            return {
              ...state,
              isLoaded: false
            }
          
        case 'UPDATE_SORT_BY':
            //debugger;
            return {
              ...state,
              sortBy: action.sortBy
            }

      default:
        var defaultState = {
          searchText: '',
          searchBy: 'title',
          sortBy: 'Rating',
          isLoaded: false,
          error: null,   
          movies: []    
        } 
        return defaultState
    }
  }
  
export default moviesReducer
