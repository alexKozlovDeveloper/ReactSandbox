import React, { Component } from "react";

import styles from "../../styles/ItemTitle.css"

function ItemTitle(props) {
    return  <div className={styles.title}>
                {props.title}
            </div>;
}

export default ItemTitle;