import React, { Component } from "react";

import styles from "../styles/NoItemLabel.css"

function NoItemLabel(props) {
    return  <div className={styles.title}>
                No films found
            </div>;
}

export default NoItemLabel;