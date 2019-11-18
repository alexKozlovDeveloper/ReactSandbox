import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ResultsBody from "./ResultsBody";
import ItemDetails from "./ItemDetails";

import '../styles/Global.css';

class App extends Component {
	constructor(props) {
		super(props);
	}
 
    render() {

        var items = [ {
            title: "Interstellar",
            releaseDate: "2014",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action",
            rating: 7.2,
            duration: 145,
            description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
        }, {
            title: "Interstellar 2",
            releaseDate: "2015",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action2",
            rating: 7.2,
            duration: 145,
            description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
        }, {
            title: "Interstellar 3",
            releaseDate: "2016",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 3",
            rating: 7.2,
            duration: 145,
            description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
        }, {
            title: "Interstellar 4",
            releaseDate: "2017",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 4",
            rating: 7.2,
            duration: 145,
            description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
        }, {
            title: "Interstellar 5",
            releaseDate: "2018",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 5",
            rating: 7.2,
            duration: 145,
            description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
        }, {
            title: "Interstellar 5",
            releaseDate: "2018",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 5",
            rating: 7.2,
            duration: 145,
            description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
        }, {
            title: "Interstellar 5",
            releaseDate: "2018",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 5",
            rating: 7.2,
            duration: 145,
            description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
        }];

        var headerConfig = {
            title:"Find Your Movies",
                searchConfig: {
                placeHolder: "Quentin Tarantino",
                buttonText: "Search",
                searchFilter: {
                    title: "Search by",
                    option1: "Title",
                    option2: "Gengre"
                }
            }
        };

        var footerConfig ={
            title: "Copyright © 2019 AkTest"
        };

        var resultsBodyConfig = {
            itemsPerRow: 4,
            resultSortConfig: {
                title: "Sort by",
                option1: "Release date",
                option2: "Rating"
            },
            resultsCountConfig: {
                title: "movies found"
            }
        }

        //items = [];

        return (
            <div>
				<Header config={headerConfig} />
                {/* <ItemDetails item={items[0]}/> */}
				<ResultsBody items={items} config={resultsBodyConfig}/>
				<Footer config={footerConfig}/>
            </div>
        );
    }
}

export default App;