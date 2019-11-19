import React, { Component } from "react";

import styles from "../styles/BackButton.css"

function BackButton(props) {
    return  <div className={styles.button}>{props.buttonText}</div>;
}

export default BackButton;