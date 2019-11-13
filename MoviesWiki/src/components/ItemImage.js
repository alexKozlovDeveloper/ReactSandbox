import React, { Component } from "react";

import styles from "../styles/ItemImage.css"

class ItemImage extends Component {
    render() {
        return (
            <div className={styles.image}>
                <div>Image {this.props.image}</div>
            </div>
        );
    }
}

export default ItemImage;