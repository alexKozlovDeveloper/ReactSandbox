import React, { Component } from "react";

import styles from "../styles/ItemReleaseDate.css"

function ItemReleaseDate(props) {
    return  <div className={styles.releasedate}>
                {props.releaseDate}
            </div>;
}

export default ItemReleaseDate;