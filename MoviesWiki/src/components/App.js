import React, { Component } from "react";

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
                <h1>My React App!</h1>
                <div 
				  onMouseEnter={this.handleMouseEnter} 
				  onMouseLeave={this.handleMouseLeave} 
				  >Mouse area</div>
            </div>
        );
    }
}

export default App;