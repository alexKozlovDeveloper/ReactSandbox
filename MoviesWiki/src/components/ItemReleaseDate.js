import React, { Component } from "react";

import styles from "../styles/ItemReleaseDate.css"

class ItemReleaseDate extends Component {
    render() {
        return (
            <div className={styles.releasedate}>
                {this.props.releaseDate}
            </div>
        );
    }
}

export default ItemReleaseDate;