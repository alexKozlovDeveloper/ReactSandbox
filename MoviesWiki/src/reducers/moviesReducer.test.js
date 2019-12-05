import { updateMovies, updateSearchBy, updateSelectedItem, updateSortBy, sortMovies, updateSearchText,loading } from '../actions/index'

import moviesReducer from './moviesReducer'

const movies = [{
        id: 1, 
        release_date: "1905-12-09", 
        vote_average: 4
    },
    {
        id: 2, 
        release_date: "1995-12-09", 
        vote_average: 6
    },
    {
        id: 3, 
        release_date: "2005-12-09", 
        vote_average: 8
    }]

describe('movies Reducer', () => {

    it('should return the initial state', () => {
      expect(moviesReducer(undefined, {})).toEqual([
        {
            searchText: '',
            searchBy: 'title',
            sortBy: 'vote_average',
            isLoaded: false,
            movies: [],
            selectedItem: '' 
        }
      ])
    })
  
    
  })