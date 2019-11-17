import React, { Component } from "react";

import styles from "../styles/ResultsCount.css"

class ResultsCount extends Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.count} {this.props.title}
            </div>
        );
    }
}

export default ResultsCount;