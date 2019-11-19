import React, { Component } from "react";

import styles from "../styles/SearchField.css";

function SearchField(props) {
    return  <input className={styles.searchfield} type="text" placeholder={props.placeHolder} />;
}

export default SearchField;