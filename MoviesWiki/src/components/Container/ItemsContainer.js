import React, { Component } from "react";

import ItemBody from "./ItemBody";
import NoItemLabel from "./NoItemLabel";

import styles from "../../styles/ItemsContainer.css"

const ItemsContainer = ({ items }) => {

    function getDivTable(items) {      
        var tableContent = items.map((item, index) => {
            return <ItemBody key={index} item={item} />;
        });

        return tableContent;
    }

    var table;

    if (items.length !== 0) {
        table = getDivTable(items);
    } else {
        table = (<NoItemLabel />);
    }

    return (
        <div className={styles.container} >
            {table}
        </div>
    );
}

export default ItemsContainer;