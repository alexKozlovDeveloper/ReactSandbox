import React, { Component } from "react";
import { connect } from 'react-redux'

import ItemTitle from "../Common/ItemTitle";
import ItemGenre from "../Common/ItemGenre";
import ItemImage from "../Common/ItemImage";
import ItemReleaseDate from "../Common/ItemReleaseDate";

import styles from "../../styles/ItemBody.css"

const updateSearchBy = (item) => ({
    type: 'UPDATE_SELECTED_ITEM',
    selectedItem: item
});

class ItemBody extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        debugger;
        this.props.updateSelectedItemFunc(this.props.item);
    }

    render() {        
        return (
            <div className={styles.body} onClick={this.handleClick}>
                <ItemImage image={this.props.item.poster_path} />
                <ItemReleaseDate releaseDate={this.props.item.release_date} />
                <ItemTitle title={this.props.item.title} />                
                <ItemGenre genre={this.props.item.genres.join(' ')} />            
            </div>
        );    
    }
}

function mapDispatchToProps(dispatch) {
    return {
         updateSelectedItemFunc: (item) => {
             dispatch(updateSearchBy(item))
         }       
    }
}

export default connect(null, mapDispatchToProps)(ItemBody);
