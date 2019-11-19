import React, { Component } from "react";

import styles from "../styles/SearchButton.css"

function SearchButton(props) {
    return  <button className={styles.button}>{props.buttonText}</button>;
}

export default SearchButton;