import { updateMovies, updateSearchBy, updateSelectedItem, updateSortBy, updateSearchText, loading } from '../actions/index'

import moviesReducer from './moviesReducer'

const item1 = {
  id: 1,
  release_date: "1905-12-09",
  vote_average: 8
}

const item2 = {
  id: 2,
  release_date: "1995-12-09",
  vote_average: 6
}

const item3 = {
  id: 3,
  release_date: "2005-12-09",
  vote_average: 4
}

const movies = [item2, item1, item3]
const sortedByRatingMovies = [item3, item2, item1]
const sortedByDateMovies = [item1, item2, item3]
const searchText = "father"
const searchBy = "ganres"
const sortBy = "release_date"

describe('movies Reducer', () => {

  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual({
      searchText: '',
      searchBy: 'title',
      sortBy: 'vote_average',
      isLoaded: false,
      movies: [],
      selectedItem: null
    })
  })

  it('Test updateSelectedItem action', () => {
    expect(moviesReducer(undefined, updateSelectedItem(item1))).toEqual({
      searchText: '',
      searchBy: 'title',
      sortBy: 'vote_average',
      isLoaded: false,
      movies: [],
      selectedItem: item1
    })
  })

  it('Test updateMovies action', () => {
    expect(moviesReducer(undefined, updateMovies(movies))).toEqual({
      searchText: '',
      searchBy: 'title',
      sortBy: 'vote_average',
      isLoaded: true,
      movies: movies,
      selectedItem: null
    })
  })

  it('Test updateSearchText action', () => {
    expect(moviesReducer(undefined, updateSearchText(searchText))).toEqual({
      searchText: searchText,
      searchBy: 'title',
      sortBy: 'vote_average',
      isLoaded: false,
      movies: [],
      selectedItem: null
    })
  })

  it('Test updateSearchBy action', () => {
    expect(moviesReducer(undefined, updateSearchBy(searchBy))).toEqual({
      searchText: '',
      searchBy: searchBy,
      sortBy: 'vote_average',
      isLoaded: false,
      movies: [],
      selectedItem: null
    })
  })

  it('Test loading action', () => {
    expect(moviesReducer({ isLoaded: true }, loading())).toEqual({
      isLoaded: false
    })
  })

  it('Test updateSortBy action', () => {
    expect(moviesReducer(undefined, updateSortBy(sortBy))).toEqual({
      searchText: '',
      searchBy: 'title',
      sortBy: sortBy,
      isLoaded: false,
      movies: [],
      selectedItem: null
    })
  })
})