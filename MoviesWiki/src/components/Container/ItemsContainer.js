import React, { Component } from "react";

import ItemBody from "./ItemBody";
import NoItemLabel from "./NoItemLabel";

import styles from "../../styles/ItemsContainer.css"

const ItemsContainer = ({ items }) => {
    
    function getDivTable(items) {
        var tableContent = [];

        items.map((item, index) => {
            //debugger;
            tableContent.push(<ItemBody key={index} title={item.title} genre={item.genres.join(' ')} image={item.poster_path} releaseDate={item.release_date}/>);
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