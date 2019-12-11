import React, { Component } from "react";

import styles from "../../styles/BackButton.css"

const BackButton = ({ buttonText }) => {
    return <div className={styles.button}>{buttonText}</div>;
}

export default BackButton;