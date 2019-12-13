import { updateMovies, updateSearchBy, updateSelectedItem, updateSortBy, updateSearchText, loading } from './index'
import { UPDATE_MOVIES, UPDATE_SEARCH_BY, UPDATE_SELECTED_ITEM, UPDATE_SORT_BY, UPDATE_SEARCH_TEXT, LOADING } from './actionTypes';

describe('Test Actions', () => {

  it('Test updateMovies action', () => {
    const content = [{ title: 'title1' }, { title: 'title2' }]

    const expectedAction = {
      type: UPDATE_MOVIES,
      movies: content
    }
    expect(updateMovies(content)).toEqual(expectedAction)
  })

  it('Test updateSearchBy action', () => {
    const content = 'test'

    const expectedAction = {
      type: UPDATE_SEARCH_BY,
      searchBy: content
    }
    expect(updateSearchBy(content)).toEqual(expectedAction)
  })

  it('Test updateSelectedItem action', () => {
    const content = { title: 'title1' }

    const expectedAction = {
      type: UPDATE_SELECTED_ITEM,
      selectedItem: content
    }
    expect(updateSelectedItem(content)).toEqual(expectedAction)
  })

  it('Test updateSortBy action', () => {
    const content = 'test'

    const expectedAction = {
      type: UPDATE_SORT_BY,
      sortBy: content
    }
    expect(updateSortBy(content)).toEqual(expectedAction)
  })

  it('Test updateSearchText action', () => {
    const content = 'test'

    const expectedAction = {
      type: UPDATE_SEARCH_TEXT,
      searchText: content
    }
    expect(updateSearchText(content)).toEqual(expectedAction)
  })

  it('Test loading action', () => {
    const expectedAction = {
      type: LOADING
    }
    expect(loading()).toEqual(expectedAction)
  })
})