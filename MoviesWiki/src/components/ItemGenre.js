import React, { Component } from "react";

import styles from "../styles/ItemGenre.css"

class ItemGenre extends Component {
    render() {
        return (
            <div className={styles.genre}>
                <div>Genre {this.props.genre}</div>
            </div>
        );
    }
}

export default ItemGenre;