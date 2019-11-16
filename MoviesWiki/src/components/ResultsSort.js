import React, { Component } from "react";

import styles from "../styles/ResultsSort.css"

class ResultsSort extends Component {
    
    constructor(props) {
        super(props);

        this.state = { selectedItem: "option2" };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ selectedItem: e.currentTarget.attributes["name"].nodeValue });
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>{this.props.title}</div>

                <div name="option1" onClick={this.handleClick} className={styles.item + 
                    (this.state.selectedItem === "option1" ? ' ' + styles.isactive : '') }>{this.props.option1}</div>   

                <div name="option2" onClick={this.handleClick} className={styles.item + 
                    (this.state.selectedItem === "option2" ? ' ' + styles.isactive : '') }>{this.props.option2}</div>
            </div>
        );
    }
}

export default ResultsSort;