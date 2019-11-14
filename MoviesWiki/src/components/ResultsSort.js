import React, { Component } from "react";

import styles from "../styles/ResultsSort.css"

class ResultsSort extends Component {
    
    constructor(props) {
        super(props);

        this.state = { selectedItem: "ratingOption" };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

        if(e.currentTarget.id === "releaseDateOption"){
            this.setState({ selectedItem: "releaseDateOption" });
        }

        if(e.currentTarget.id === "ratingOption"){
            this.setState({ selectedItem: "ratingOption" });
        }

        console.log('Click');
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Sort By</div>
                <div id="releaseDateOption" onClick={this.handleClick} className={styles.item + (this.state.selectedItem === "releaseDateOption" ? ' ' + styles.isactive : '') }>Release Date</div>                
                <div id="ratingOption" onClick={this.handleClick} className={styles.item + (this.state.selectedItem === "ratingOption" ? ' ' + styles.isactive : '') }>Rating</div>
            </div>
        );
    }
}

export default ResultsSort;