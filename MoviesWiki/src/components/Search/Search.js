import React, { Component } from "react";

import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import CustomOptionList from "../Common/CustomOptionList";

import styles from "../../styles/Search.css"

class Search extends Component {
    render() {
        return (            
            <div className={styles.search}> 
                <div>                
                    <SearchField placeHolder={this.props.config.placeHolder}/>
                    <SearchButton buttonText={this.props.config.buttonText}/>
                </div>
                <CustomOptionList config={this.props.config.searchFilter}/>
            </div>           
        );
    }
}

export default Search;