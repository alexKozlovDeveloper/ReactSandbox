import React, { Component } from "react";

import ItemTitle from "./ItemTitle";
import ItemGenre from "./ItemGenre";
import ItemImage from "./ItemImage";
import ItemReleaseDate from "./ItemReleaseDate";
import ItemRating from "./ItemRating";
import ItemDescription from "./ItemDescription";
import ItemYearAndDuration from "./ItemYearAndDuration";

import styles from "../styles/ItemDetails.css"

class ItemDetails extends Component {
    render() {
        return (
            <div className={styles.body}>
                <div>
                    <ItemImage image={this.props.item.image} />
                </div>
                <div>
                    <ItemTitle title={this.props.item.title} />  
                    <ItemRating rating={this.props.item.rating} />     
                </div>
                <div>
                    <ItemYearAndDuration year={this.props.item.year} duration={this.props.item.duration} />
                </div>
                <div>
                    <ItemDescription description={this.props.item.description} />   
                </div>     
            </div>
        );
    }
}

export default ItemDetails;