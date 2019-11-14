import React, { Component } from "react";

import styles from "../styles/SearchButton.css"

class SearchButton extends Component {
    render() {
        return (            
            <button className={styles.button}>Search</button>            
        );
    }
}

export default SearchButton;