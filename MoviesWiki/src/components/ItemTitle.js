import React, { Component } from "react";

import styles from "../styles/ItemTitle.css"

class ItemTitle extends Component {
    render() {
        return (
            <div className="title">
                <div className={styles.title}>aa {styles.title} aa</div>
                <div>Title {this.props.title}</div>
            </div>
        );
    }
}

export default ItemTitle;