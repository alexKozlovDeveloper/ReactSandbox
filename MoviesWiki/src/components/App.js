import React, { Component } from "react";

import Title from "./Title";
import ItemBody from "./ItemBody";

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
                <h1>My React App! 4</h1>
                <div 
				  onMouseEnter={this.handleMouseEnter} 
				  onMouseLeave={this.handleMouseLeave} 
				  >Mouse area</div>
				  <Title name="abc"/>
				  <ItemBody title="Kill Bill 2" genre="Action" image="img" releaseDate="2003" />
            </div>
        );
    }
}

export default App;