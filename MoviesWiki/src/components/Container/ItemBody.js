import React, { Component } from "react";

import ItemTitle from "../Common/ItemTitle";
import ItemGenre from "../Common/ItemGenre";
import ItemImage from "../Common/ItemImage";
import ItemReleaseDate from "../Common/ItemReleaseDate";

import styles from "../../styles/ItemBody.css"

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