import React, { Component } from "react";

import styles from "../../styles/ItemGenre.css"

const ItemGenre = ({ genre }) => {
    return  <div className={styles.genre}>
                {genre}
            </div>;
}

export default ItemGenre;