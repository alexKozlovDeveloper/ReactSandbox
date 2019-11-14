import React, { Component } from "react";

import styles from "../styles/ItemTitle.css"

class ItemTitle extends Component {
    render() {
        return (
            <div className={styles.title}>
                {this.props.title}
            </div>
        );
    }
}

export default ItemTitle;