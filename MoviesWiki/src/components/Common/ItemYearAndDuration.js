import React, { Component } from "react";

import styles from "../../styles/ItemYearAndDuration.css"

const ItemYearAndDuration = ({ year, duration}) => {
    return  <>
                <div className={styles.container}>
                    <div className={styles.number}>{year}</div>
                    <div className={styles.string}>year</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.number}>{duration}</div>
                    <div className={styles.string}>min</div>
                </div>
            </>;
}

export default ItemYearAndDuration;