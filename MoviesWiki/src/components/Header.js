import React, { Component } from "react";

import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import SearchFilter from "./SearchFilter";

import styles from "../styles/Header.css"

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headertitle}>Find Your Movies</div>
                <div>                
                    <SearchField />
                    <SearchButton />
                </div>
                <SearchFilter />
            </div>
        );
    }
}

export default Header;