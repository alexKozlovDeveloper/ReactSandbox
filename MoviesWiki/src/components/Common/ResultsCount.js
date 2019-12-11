import React, { Component } from "react";

import styles from "../../styles/ResultsCount.css"

const ResultsCount = ({ count, title }) => {
    return <div className={styles.container}>
        {count} {title}
    </div>;
}

export default ResultsCount;