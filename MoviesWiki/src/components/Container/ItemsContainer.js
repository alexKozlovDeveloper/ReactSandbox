import React, { Component } from "react";

import ItemBody from "./ItemBody";
import NoItemLabel from "./NoItemLabel";

import styles from "../../styles/ItemsContainer.css"

import { renderToString } from 'react-dom/server'

class ItemsContainer extends Component {

    render() {
        
        function getDivTable(items, itemsPerRow) {
            var tableContent = [];     

            for (var i = 0, rowIndex = 1; i < items.length; i++, rowIndex++) {        
                tableContent.push(<ItemBody key={i} title={items[i].title} genre={items[i].genre} image={items[i].image} releaseDate={items[i].releaseDate}/>);        
            }
        
            return tableContent;
        }

        var table = "";

        if(this.props.items.length !== 0) {
            table = getDivTable(this.props.items, parseInt(this.props.itemsPerRow));
        } else{            
            table = renderToString(<NoItemLabel />);
        }

        return (
            <div className={styles.container} >
                {table}
            </div>
        );
    }
}

export default ItemsContainer;