import React, { Component } from "react";

//import styles from "../styles/ItemImage.css"

class ItemYearAndDuration extends Component {
    render() {
        
        //className={styles.imagecontainer}
        
        return (
            <div>
                <div>{this.props.year}</div>
                <div>{this.props.duration}</div>
            </div>
        );
    }
}

export default ItemYearAndDuration;