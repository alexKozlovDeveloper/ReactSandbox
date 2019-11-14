import React, { Component } from "react";

import styles from "../styles/Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.container}>Copyright &copy; 2019 AkTest</div>        
            </div>
        );
    }
}

export default Footer;