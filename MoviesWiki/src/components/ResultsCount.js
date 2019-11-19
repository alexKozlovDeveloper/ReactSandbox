import React, { Component } from "react";

import styles from "../styles/ResultsCount.css"

function ResultsCount(props) {
    return  <div className={styles.container}>
                {props.count} {props.title}
            </div>;
}

export default ResultsCount;