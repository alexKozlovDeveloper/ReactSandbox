import React, { Component } from "react";

import styles from "../styles/Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.container}>{this.props.config.title}</div>        
            </div>
        );
    }
}

export default Footer;