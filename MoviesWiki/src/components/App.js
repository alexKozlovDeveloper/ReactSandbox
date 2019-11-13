import React, { Component } from "react";

import ItemBody from "./ItemBody";

import Header from "./Header";
import Footer from "./Footer";

import styles from "../styles/App.css"

//import '../styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter() {
		console.log('Mouse Enter!');
	}
	
	handleMouseLeave() {
		console.log('Mouse Leave!');
	}
	
	handleClick() {
		console.log('Click!');
	}
 
    render() {
        return (
            <div onClick={this.handleClick}>
				<Header />
                <h1>My React App! 4</h1>
                <div 
				  onMouseEnter={this.handleMouseEnter} 
				  onMouseLeave={this.handleMouseLeave} 
				  >Mouse area</div>
				  <ItemBody title="Kill Bill 2" genre="Action" image="img" releaseDate="2003" />
				  <Footer />
            </div>
        );
    }
}

export default App;