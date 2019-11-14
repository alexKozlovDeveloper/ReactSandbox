import React, { Component } from "react";

import ItemTitle from "./ItemTitle";
import ItemGenre from "./ItemGenre";
import ItemImage from "./ItemImage";
import ItemReleaseDate from "./ItemReleaseDate";

import styles from "../styles/ItemBody.css"

class ItemBody extends Component {
    render() {
        return (
            <div className={styles.body}>
                <ItemImage image={this.props.image} />
                <ItemReleaseDate releaseDate={this.props.releaseDate} />
                <ItemTitle title={this.props.title} />                
                <ItemGenre genre={this.props.genre} />            
            </div>
        );
    }
}

export default ItemBody;