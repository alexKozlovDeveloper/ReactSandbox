import React, { Component } from "react";

import styles from "../../styles/DetailsTitle.css"

const DetailsTitle = ({ title}) => {
    return  <div className={styles.title}>
                {title}
            </div>;
}

export default DetailsTitle;