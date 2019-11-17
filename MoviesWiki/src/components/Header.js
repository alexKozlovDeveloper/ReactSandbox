import React, { Component } from "react";

import Search from "./Search";

import styles from "../styles/Header.css"

class Header extends Component {
    render() {
        return (
            <div className={styles.header}> 
                <div className={styles.container}>
                <div className={styles.headertitle}>{this.props.config.title}</div>
                    <Search config={this.props.config.searchConfig} />                    
                </div>
            </div>
        );
    }
}

export default Header;