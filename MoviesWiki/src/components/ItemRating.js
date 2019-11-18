import React, { Component } from "react";

//import styles from "../styles/ItemImage.css"

class ItemRating extends Component {
    render() {
        
        //className={styles.imagecontainer}
        
        return (
            <div>
                {this.props.rating}
            </div>
        );
    }
}

export default ItemRating;