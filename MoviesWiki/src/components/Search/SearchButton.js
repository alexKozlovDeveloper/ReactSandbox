import React, { Component } from "react";

import styles from "../../styles/SearchButton.css"

const SearchButton = ({ buttonText }) => {
    return  <button className={styles.button}>{buttonText}</button>;
}

export default SearchButton;