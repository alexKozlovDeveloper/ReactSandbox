import React, { Component } from "react";

import styles from "../../styles/SearchButton.css"

const SearchButton = ({ buttonText, updateFunc }) => {
    return  <button className={styles.button} onClick={() => updateFunc()}>{buttonText}</button>;
}

export default SearchButton;