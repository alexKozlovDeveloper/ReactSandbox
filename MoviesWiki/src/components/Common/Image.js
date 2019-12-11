import React, { Component } from "react";

import styles from "../../styles/Image.css"

const Image = ({ image }) => {
    return <div className={styles.imagecontainer}>
        <img className={styles.image} src={image}></img>
    </div>;
}

export default Image;