const TitleReducer = (state = {title: "st_["}, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':      
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}
export default TitleReducer