import React, { Component } from "react";

import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import CustomOptionList from "../Common/CustomOptionList";

import styles from "../../styles/Search.css"

const Search = ({ config }) => {
    return (            
        <div className={styles.search}> 
            <div>                
                <SearchField placeHolder={config.placeHolder}/>
                <SearchButton buttonText={config.buttonText}/>
            </div>
            <CustomOptionList config={config.searchFilter}/>
        </div>           
    );    
}

export default Search;