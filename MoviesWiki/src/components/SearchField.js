import React, { Component } from "react";

import styles from "../styles/SearchField.css"

class SearchField extends Component {
    render() {
        return (
            <input className={styles.searchfield} type="text" placeholder={this.props.placeHolder} />           
        );
    }
}

export default SearchField;