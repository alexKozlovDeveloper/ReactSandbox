import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ItemsContainer from "./ItemsContainer";

import styles from "../styles/App.css"

class App extends Component {
	constructor(props) {
		super(props);
	}
 
    render() {
        return (
            <div>
				<Header />
				<ItemsContainer />
				<Footer />
            </div>
        );
    }
}

export default App;