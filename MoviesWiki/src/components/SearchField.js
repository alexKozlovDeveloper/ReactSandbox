import React, { Component } from "react";

import styles from "../styles/SearchField.css"

class SearchField extends Component {
    render() {
        return (
            <input className={styles.searchfield} type="text" placeholder="Quentin Tarantino" />           
        );
    }
}

export default SearchField;