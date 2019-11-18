import React, { Component } from "react";

//import styles from "../styles/ItemImage.css"

class ItemDescription extends Component {
    render() {
        
        //className={styles.imagecontainer}
        
        return (
            <div>
                {this.props.description}
            </div>
        );
    }
}

export default ItemDescription;