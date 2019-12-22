const INITIAL_STATE = {
  title: 'default-state'
};

const TitleReducer = (state = INITIAL_STATE, action) => {
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