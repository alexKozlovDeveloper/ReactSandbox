import React, { Component } from "react";

import ResultsBody from "../ResultsBody";

import styles from "../../styles/Home.css"

const Home = ({ resultsBodyConfig }) => {
    return <div className={styles.home}>
        <ResultsBody config={resultsBodyConfig}></ResultsBody>
    </div>;
}

export default Home;