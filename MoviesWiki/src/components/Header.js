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
                    {/* <nav>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Products</a>
                        <a href="#">Services</a>
                        <a href="#">Contact Us</a>
                    </nav> */}
                </div>
            </div>
        );
    }
}

export default Header;