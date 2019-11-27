import React, { Component } from "react";

import ItemTitle from "../Common/ItemTitle";
import ItemGenre from "../Common/ItemGenre";
import ItemImage from "../Common/ItemImage";
import ItemReleaseDate from "../Common/ItemReleaseDate";

import styles from "../../styles/ItemBody.css"

const ItemBody = ({ image, releaseDate, title, genre}) => {
    return (
        <div className={styles.body}>
            <ItemImage image={image} />
            <ItemReleaseDate releaseDate={releaseDate} />
            <ItemTitle title={title} />                
            <ItemGenre genre={genre} />            
        </div>
    );    
}

export default ItemBody;