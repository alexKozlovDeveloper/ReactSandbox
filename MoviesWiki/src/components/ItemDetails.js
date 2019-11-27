import React, { Component } from "react";

import ItemImage from "./Common/ItemImage";
import ItemDetailsTitle from "./Common/ItemDetailsTitle";
import ItemRating from "./Common/ItemRating";
import ItemDescription from "./Common/ItemDescription";
import ItemYearAndDuration from "./Common/ItemYearAndDuration";
import BackButton from "./Common/BackButton";

import styles from "../styles/ItemDetails.css"

const ItemDetails = ({ item }) => {
    return (
        <div className={styles.body}>
            <div className={styles.imagecontainer}>
                <ItemImage image={item.image} />
            </div>
            <div className={styles.detailscontainer}>
                <div className={styles.maintitlecontainer}>
                    <ItemDetailsTitle title={item.title} />  
                    <ItemRating rating={item.rating} />     
                </div>
                <div className={styles.propertiescontainer}>
                    <ItemYearAndDuration year={item.releaseDate} duration={item.duration}/>
                </div>
                <div className={styles.descriptioncontainer}>
                    <ItemDescription description={item.description} />   
                </div>  
            </div>  
            <div>
                <BackButton buttonText=""/>
            </div> 
        </div>
    );    
}

export default ItemDetails;