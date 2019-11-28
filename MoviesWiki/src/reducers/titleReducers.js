const titleReducers = (state = [], action) => {
    switch (action.type) {
      case 'SET_TITLE':
        return [
          ...state,
          {
            title: action.title
          }
        ]
      default:
        return state
    }
  }
  
  export default titleReducers