import { UPDATE_MOVIES, UPDATE_SEARCH_BY, UPDATE_SELECTED_ITEM, UPDATE_SORT_BY, SORT_MOVIES, UPDATE_SEARCH_TEXT, LOADING } from './actionTypes';

export const updateMovies = (movies) => ({
  type: UPDATE_MOVIES,
  movies: movies
})

export const updateSearchBy = (searchBy) => ({
  type: UPDATE_SEARCH_BY,
  searchBy: searchBy
});

export const updateSelectedItem = (item) => ({
  type: UPDATE_SELECTED_ITEM,
  selectedItem: item
});

export const updateSortBy = (sortBy) => ({
  type: UPDATE_SORT_BY,
  sortBy: sortBy
});

// export const sortMovies = () => ({
//   type: SORT_MOVIES
// });

export const updateSearchText = (searchText) => ({
  type: UPDATE_SEARCH_TEXT,
  searchText: searchText
});

export const loading = () => ({
  type: LOADING
});
