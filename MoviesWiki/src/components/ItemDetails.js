import React, { Component } from "react";

import ItemImage from "./Common/ItemImage";
import ItemDetailsTitle from "./Common/ItemDetailsTitle";
import ItemRating from "./Common/ItemRating";
import ItemDescription from "./Common/ItemDescription";
import ItemYearAndDuration from "./Common/ItemYearAndDuration";
import BackButton from "./Common/BackButton";

import styles from "../styles/ItemDetails.css"

class ItemDetails extends Component {
    render() {
        return (
            <div className={styles.body}>
                <div className={styles.imagecontainer}>
                    <ItemImage image={this.props.item.image} />
                </div>
                <div className={styles.detailscontainer}>
                    <div className={styles.maintitlecontainer}>
                        <ItemDetailsTitle title={this.props.item.title} />  
                        <ItemRating rating={this.props.item.rating} />     
                    </div>
                    <div className={styles.propertiescontainer}>
                        <ItemYearAndDuration year={this.props.item.releaseDate} duration={this.props.item.duration}/>
                    </div>
                    <div className={styles.descriptioncontainer}>
                        <ItemDescription description={this.props.item.description} />   
                    </div>  
                </div>  
                <div>
                    <BackButton buttonText=""/>
                </div> 
            </div>
        );
    }
}

export default ItemDetails;