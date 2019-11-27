import React, { Component } from "react";

import styles from "../../styles/SearchField.css";

const SearchField = ({ placeHolder }) => {
    return  <input className={styles.searchfield} type="text" placeholder={placeHolder} />;
}

export default SearchField;