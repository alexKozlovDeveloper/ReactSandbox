import React, { Component } from "react";

import ResultsCount from "./ResultsCount";
import ResultsSort from "./ResultsSort";
import ItemsContainer from "./ItemsContainer";

import styles from "../styles/ResultsBody.css"

class ResultsBody extends Component {
    render() {
        return (
            <div className={styles.body}>
                <div className={styles.infocontainer}>
                    <ResultsCount count={this.props.items.length}/>
                    <ResultsSort title={this.props.resultSortConfig.title} option1={this.props.resultSortConfig.option1} option2={this.props.resultSortConfig.option2} />
                </div>
                <div>
                    <ItemsContainer items={this.props.items} itemsPerRow={this.props.itemsPerRow}/>
                </div>
            </div>
        );
    }
}

export default ResultsBody;