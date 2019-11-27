import React, { Component } from "react";

import styles from "../../styles/ItemImage.css"

const ItemImage = ({ image }) => {
    return  <div className={styles.imagecontainer}>
                <img className={styles.image} src={image}></img>
            </div>;
}

export default ItemImage;