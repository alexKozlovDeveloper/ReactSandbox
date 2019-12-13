import React, { Component } from "react";

import ResultsBody from "../ResultsBody";

import Header from "../Header";
import Footer from "../Footer";

import styles from "../../styles/Home.css"

const Home = ({ resultsBodyConfig, headerConfig, match, history }) => {
    return <div className={styles.home}>
        <Header config={headerConfig}/>
        <ResultsBody config={resultsBodyConfig}></ResultsBody>
        <Footer />
    </div>;
}

export default Home;