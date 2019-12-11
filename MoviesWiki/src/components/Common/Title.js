import React, { Component } from "react";

import styles from "../../styles/Title.css"

const Title = ({ title }) => {
    return <div className={styles.title}>
        {title}
    </div>;
}

export default Title;