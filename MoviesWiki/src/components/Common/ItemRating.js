import React, { Component } from "react";

import styles from "../../styles/ItemRating.css"

function ItemRating(props) {
    return  <div className={styles.title}>
                {props.rating}
            </div>;
}

export default ItemRating;