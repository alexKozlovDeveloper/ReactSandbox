import React, { Component } from "react";

import styles from "../../styles/ItemTitle.css"

const ItemTitle = ({ title }) => {
    return  <div className={styles.title}>
                {title}
            </div>;
}

export default ItemTitle;