import React, { Component } from "react";

import styles from "../../styles/ItemDetailsTitle.css"

function ItemDetailsTitle(props) {
    return  <div className={styles.title}>
                {props.title}
            </div>;
}

export default ItemDetailsTitle;