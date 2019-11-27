import React, { Component } from "react";

import ItemBody from "./ItemBody";
import NoItemLabel from "./NoItemLabel";

import styles from "../../styles/ItemsContainer.css"

import { renderToString } from 'react-dom/server'

const ItemsContainer = ({ items }) => {

    function getDivTable(items) {
        var tableContent = [];

        items.map((item, index) => {
            tableContent.push(<ItemBody key={index} title={item.title} genre={item.genre} image={item.image} releaseDate={item.releaseDate}/>);
        });

        return tableContent;
    }

    var table = "";

    if(items.length !== 0) {
        table = getDivTable(items);
    } else{            
        table = (<NoItemLabel />);
    }

    return (
        <div className={styles.container} >
            {table}
        </div>
    );    
}

export default ItemsContainer;