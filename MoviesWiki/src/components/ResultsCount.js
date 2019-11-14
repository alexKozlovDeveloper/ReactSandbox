import React, { Component } from "react";

import styles from "../styles/ResultsCount.css"

class ResultsCount extends Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.count} movies found
            </div>
        );
    }
}

export default ResultsCount;