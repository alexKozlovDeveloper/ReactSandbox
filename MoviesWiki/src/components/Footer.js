import React, { Component } from "react";

import styles from "../styles/Footer.css"

const Footer = ({ config }) => {
  return <div className={styles.footer}>
    <div className={styles.container}>{config.title}</div>
  </div>;
}

export default Footer;