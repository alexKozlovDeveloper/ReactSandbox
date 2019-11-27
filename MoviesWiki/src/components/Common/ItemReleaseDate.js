import React, { Component } from "react";

import styles from "../../styles/ItemReleaseDate.css"

const ItemReleaseDate = ({ releaseDate }) => {
    return  <div className={styles.releasedate}>
                {releaseDate}
            </div>;
}

export default ItemReleaseDate;