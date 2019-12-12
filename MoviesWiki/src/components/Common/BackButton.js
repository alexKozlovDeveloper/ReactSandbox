import React, { Component } from "react";

import { Link } from 'react-router-dom'

import styles from "../../styles/BackButton.css"

const BackButton = ({ buttonText }) => {
    return <Link to="/" className={styles.button}>{buttonText}</Link>
}

export default BackButton;