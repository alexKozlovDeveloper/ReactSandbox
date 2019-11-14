import React, { Component } from "react";

import styles from "../styles/SearchFilter.css"

class SearchFilter extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.item}>Search By</div>
                <div className={styles.item + ' ' + styles.isactive}>Title</div>
                <div className={styles.item}>Genre</div>
            </div>
        );
    }
}

export default SearchFilter;