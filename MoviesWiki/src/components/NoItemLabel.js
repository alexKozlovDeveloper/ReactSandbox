import React, { Component } from "react";

import styles from "../styles/NoItemLabel.css"

class NoItemLabel extends Component {
    render() {
        return (
            <div className={styles.title}>
                No films found
            </div>
        );
    }
}

export default NoItemLabel;