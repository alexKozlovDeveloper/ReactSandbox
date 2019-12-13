import React, { Component } from "react";

import Search from "./Search/Search";

import styles from "../styles/Header.css"

const Header = ({ config, updateUrl }) => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headertitle}>{config.title}</div>
                <Search config={config.searchConfig} updateUrl={updateUrl}/>
            </div>
        </div>
    );
}

export default Header;