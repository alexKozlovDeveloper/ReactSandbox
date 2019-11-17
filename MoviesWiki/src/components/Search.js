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
                    <SearchField placeHolder={this.props.config.placeHolder}/>
                    <SearchButton buttonText={this.props.config.buttonText}/>
                </div>
                <SearchFilter title={this.props.config.searchFilter.title} option1={this.props.config.searchFilter.option1} option2={this.props.config.searchFilter.option2}/>
            </div>           
        );
    }
}

export default Search;