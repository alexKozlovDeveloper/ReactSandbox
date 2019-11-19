import React, { Component } from "react";

import styles from "../../styles/ItemImage.css"

function ItemImage(props) {
    return  <div className={styles.imagecontainer}>
                <img className={styles.image} src={props.image}></img>
            </div>;
}

export default ItemImage;