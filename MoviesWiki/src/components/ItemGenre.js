import React, { Component } from "react";

import styles from "../styles/ItemGenre.css"

class ItemGenre extends Component {
    render() {
        return (
            <div className={styles.genre}>
                {this.props.genre}
            </div>
        );
    }
}

export default ItemGenre;