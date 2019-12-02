import React, { Component } from "react";

import styles from "../../styles/SearchField.css";

const SearchField = ({ placeHolder, updateFunc }) => {
    return  <input className={styles.searchfield} type="text" placeholder={placeHolder} onInput={(e) => updateFunc(e.currentTarget.value)} />;
}

export default SearchField;