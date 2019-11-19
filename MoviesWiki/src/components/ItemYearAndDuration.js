import React, { Component } from "react";

import styles from "../styles/ItemYearAndDuration.css"

function ItemYearAndDuration(props) {
    return  <React.Fragment>
                <div className={styles.container}>
                    <div className={styles.number}>{props.year}</div>
                    <div className={styles.string}>year</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.number}>{props.duration}</div>
                    <div className={styles.string}>min</div>
                </div>
            </React.Fragment>;
}

export default ItemYearAndDuration;