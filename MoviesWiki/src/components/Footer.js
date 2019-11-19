import React, { Component } from "react";

import styles from "../styles/Footer.css"

function Footer(props) {
    return <div className={styles.footer}>
                <div className={styles.container}>{props.config.title}</div>        
            </div>;
  }

export default Footer;