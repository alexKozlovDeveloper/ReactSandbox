import React, { Component } from "react";

import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import SearchFilter from "./SearchFilter";

import styles from "../styles/Search.css"

class Search extends Component {
    render() {
        return (            
            <div className={styles.search}>                
                <div>                
                    <SearchField />
                    <SearchButton />
                </div>
                <SearchFilter />
            </div>           
        );
    }
}

export default Search;