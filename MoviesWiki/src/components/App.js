import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ResultsBody from "./ResultsBody";

import styles from "../styles/App.css"

import '../styles/Global.css';

class App extends Component {
	constructor(props) {
		super(props);
	}
 
    render() {
        return (
            <div>
				<Header />
				<ResultsBody />
				<Footer />
            </div>
        );
    }
}

export default App;