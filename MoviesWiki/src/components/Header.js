import React, { Component } from "react";

import Search from "./Search";

import styles from "../styles/Header.css"

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headertitle}>Find Your Movies</div>
                    <Search />                    
                </div>
            </div>
        );
    }
}

export default Header;