import React, { Component } from "react";

import DetailsView from "../DetailsView";

import styles from "../../styles/MovieView.css"

const MovieView = ({ resultsBodyConfig }) => {
    return <div className={styles.MovieView}>
        <DetailsView /> 
    </div>;
}

export default MovieView;