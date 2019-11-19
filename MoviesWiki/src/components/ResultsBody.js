import React, { Component } from "react";

import ResultsCount from "./ResultsCount";
import ItemsContainer from "./ItemsContainer";

import styles from "../styles/ResultsBody.css"
import CustomOptionList from "./CustomOptionList";

class ResultsBody extends Component {
    render() {
        return (
            <div className={styles.body}>
                <div className={styles.infocontainer}>
                    <div className={styles.resultscountcontainer}>
                        <ResultsCount count={this.props.items.length} title={this.props.config.resultsCountConfig.title}/>
                    </div>
                    <div className={styles.customoptionlistcontainer}>
                        <CustomOptionList config={this.props.config.resultSortConfig} />
                    </div>
                </div>
                <div>
                    <ItemsContainer items={this.props.items} itemsPerRow={this.props.config.itemsPerRow}/>
                </div>
            </div>
        );
    }
}

export default ResultsBody;