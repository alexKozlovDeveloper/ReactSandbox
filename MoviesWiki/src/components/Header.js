import React, { Component } from "react";

import Search from "./Search";

import styles from "../styles/Header.css"

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headertitle}>Find Your Movies</div>
                <Search />
            </div>
        );
    }
}

export default Header;