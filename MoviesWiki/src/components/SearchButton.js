import React, { Component } from "react";

import styles from "../styles/SearchButton.css"

class SearchButton extends Component {
    render() {
        return (            
            <button className={styles.button}>{this.props.buttonText}</button>            
        );
    }
}

export default SearchButton;