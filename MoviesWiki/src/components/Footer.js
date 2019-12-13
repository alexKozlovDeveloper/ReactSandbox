import React, { Component } from "react";

import styles from "../styles/Footer.css"

const Footer = ({ config }) => {
  return <div className={styles.footer}>
    <div className={styles.container}>Copyright © 2019 AkTest</div>
  </div>;
}

export default Footer;