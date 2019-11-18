import React, { Component } from "react";

import ItemBody from "./ItemBody";
import NoItemLabel from "./NoItemLabel";

import styles from "../styles/ItemsContainer.css"

import { renderToString } from 'react-dom/server'

class ItemsContainer extends Component {

    render() {
        
        function getTable(items, itemsPerRow) {
            var tableContent = "<table>";
        
            for (var i = 0, rowIndex = 1; i < items.length; i++, rowIndex++) {
        
                if (rowIndex === 1) {
                    tableContent += "<tr>";
                }
        
                var htmlItem = renderToString(<ItemBody title={items[i].title} genre={items[i].genre} image={items[i].image} releaseDate={items[i].releaseDate}/>);

                tableContent += "<td>" + htmlItem + "</td>";        

                if (rowIndex === itemsPerRow) {
                    tableContent += "</tr>";
                    rowIndex = 0;
                }
            }
        
            if (items.length % itemsPerRow !== 0) {
                tableContent += "</tr>";
            }
        
            tableContent += "</table>";
        
            return tableContent;
        }


        var table = "";

        if(this.props.items.length !== 0) {
            table = getTable(this.props.items, parseInt(this.props.itemsPerRow));
        } else{            
            table = renderToString(<NoItemLabel />);
        }

        return (
            <div className={styles.container} dangerouslySetInnerHTML={{__html: table}}>
            </div>
        );
    }
}

export default ItemsContainer;