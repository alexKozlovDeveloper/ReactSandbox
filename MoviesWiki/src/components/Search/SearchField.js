import React, { Component } from "react";

import styles from "../../styles/SearchField.css";

const SearchField = ({ placeHolder, updateFunc, submitFunc }) => {
    return <input className={styles.searchfield} type="text" placeholder={placeHolder} onInput={(e) => updateFunc(e.currentTarget.value)} onKeyDown={(e) => submitFunc(e)} />;
}

export default SearchField;