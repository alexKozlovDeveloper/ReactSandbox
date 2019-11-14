import React, { Component } from "react";

import styles from "../styles/SearchFilter.css"

class SearchFilter extends Component {

    constructor(props) {
        super(props);

        this.state = { selectedItem: "titleOption" };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

        if(e.currentTarget.id === "titleOption"){
            this.setState({ selectedItem: "titleOption" });
        }

        if(e.currentTarget.id === "GenreOption"){
            this.setState({ selectedItem: "GenreOption" });
        }

        console.log('Click');
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Search By</div>
                <div id="titleOption" onClick={this.handleClick} className={styles.item + (this.state.selectedItem === "titleOption" ? ' ' + styles.isactive : '') }>Title</div>                
                <div id="GenreOption" onClick={this.handleClick} className={styles.item + (this.state.selectedItem === "GenreOption" ? ' ' + styles.isactive : '') }>Genre</div>
            </div>
        );
    }
}

export default SearchFilter;