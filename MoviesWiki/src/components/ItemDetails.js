import React, { Component } from "react";
import { connect } from 'react-redux'

import ItemImage from "./Common/ItemImage";
import ItemDetailsTitle from "./Common/ItemDetailsTitle";
import ItemRating from "./Common/ItemRating";
import Description from "./Common/Description";
import ItemYearAndDuration from "./Common/ItemYearAndDuration";
import BackButton from "./Common/BackButton";

import styles from "../styles/ItemDetails.css"


class ItemDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        return (
            <div className={styles.body}>
                <div className={styles.imagecontainer}>
                    <ItemImage image={this.props.item.poster_path} />
                </div>
                <div className={styles.detailscontainer}>
                    <div className={styles.maintitlecontainer}>
                        <ItemDetailsTitle title={this.props.item.title} />  
                        <ItemRating rating={this.props.item.vote_average} />     
                    </div>
                    <div className={styles.propertiescontainer}>
                        <ItemYearAndDuration year={this.props.item.release_date} duration={this.props.item.runtime}/>
                    </div>
                    <div className={styles.descriptioncontainer}>
                        <Description description={this.props.item.overview} />   
                    </div>  
                </div>  
                <div>
                    <BackButton buttonText=""/>
                </div> 
            </div>
        );   
    } 
}

function mapStateToProps(state){    
    const { selectedItem } = state.moviesReducer;

    return { 
        item: selectedItem
    };
}

export default connect(mapStateToProps)(ItemDetails);
