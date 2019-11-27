import React, { Component } from "react";

import ResultsCount from "./Common/ResultsCount";
import ItemsContainer from "./Container/ItemsContainer";
import CustomOptionList from "./Common/CustomOptionList";

import styles from "../styles/ResultsBody.css"

const ResultsBody = ({ items, config }) => {
    return (
        <div className={styles.body}>
            <div className={styles.infocontainer}>
                <div className={styles.resultscountcontainer}>
                    <ResultsCount count={items.length} title={config.resultsCountConfig.title}/>
                </div>
                <div className={styles.customoptionlistcontainer}>
                    <CustomOptionList config={config.resultSortConfig} />
                </div>
            </div>
            <div>
                <ItemsContainer items={items} itemsPerRow={config.itemsPerRow}/>
            </div>
        </div>
    );    
}

export default ResultsBody;