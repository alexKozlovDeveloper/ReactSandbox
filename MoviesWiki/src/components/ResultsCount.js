import React, { Component } from "react";

//import styles from "../styles/ItemTitle.css"

class ResultsCount extends Component {
    render() {
        return (
            <div>
                Results Count '{this.props.count}'
            </div>
        );
    }
}

export default ResultsCount;