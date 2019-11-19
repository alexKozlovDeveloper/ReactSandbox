import React, { Component } from "react";

import styles from "../../styles/ItemGenre.css"

function ItemGenre(props) {
    return  <div className={styles.genre}>
                {props.genre}
            </div>;
}

export default ItemGenre;