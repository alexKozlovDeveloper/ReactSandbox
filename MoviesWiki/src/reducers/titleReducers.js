const titleReducers = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_TITLE':
        console.log("action UPDATE_TITLE-" + action.title);
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