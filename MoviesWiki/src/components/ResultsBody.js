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
                    <ResultsCount count="3"/>
                    <ResultsSort title="Sort by" option1="Release date" option2="Rating" />
                </div>
                <div>
                    <ItemsContainer />
                </div>
            </div>
        );
    }
}

export default ResultsBody;