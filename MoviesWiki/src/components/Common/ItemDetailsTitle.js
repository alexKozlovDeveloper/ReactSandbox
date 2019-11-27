import React, { Component } from "react";

import styles from "../../styles/ItemDetailsTitle.css"

const ItemDetailsTitle = ({ title}) => {
    return  <div className={styles.title}>
                {title}
            </div>;
}

export default ItemDetailsTitle;