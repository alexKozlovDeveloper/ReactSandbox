import React, { Component } from "react";

import styles from "../styles/ItemImage.css"

class ItemImage extends Component {
    render() {
        return (
            <div className={styles.imagecontainer}>
                <img className={styles.image} src={this.props.image}></img>
            </div>
        );
    }
}

export default ItemImage;