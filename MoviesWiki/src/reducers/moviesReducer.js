const moviesReducer = (state = [], action) => {
    switch (action.type) {
       case 'UPDATE_MOVIES':
         debugger;
         return {
            isLoaded: true,
            error: null,   
            movies: action.movies.data
        }
        
      default:
        //https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average

        var defaultState = {
            isLoaded: false,
            error: null,   
            movies: []    
        }    

        return defaultState
    }
  }
  
  export default moviesReducer

//   {
//     budget: 0,
//     genres: ["Mystery", "Thriller"],
//     id: 412302,
//     overview: "A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.",
//     poster_path: "https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg",
//     release_date: "2018-03-30",
//     revenue: 0,
//     runtime: 92,
//     tagline: "",
//     title: "Gemini",
//     vote_average: 10,
//     vote_count: 3
// }