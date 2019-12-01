import React, { Component } from "react";

import ItemBody from "./ItemBody";
import NoItemLabel from "./NoItemLabel";

import styles from "../../styles/ItemsContainer.css"

import { renderToString } from 'react-dom/server'

const ItemsContainer = ({ items }) => {

    // budget: 0
    // genres: ["Mystery", "Thriller"]
    // id: 412302
    // overview: "A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity."
    // poster_path: "https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg"
    // release_date: "2018-03-30"
    // revenue: 0
    // runtime: 92
    // tagline: ""
    // title: "Gemini"
    // vote_average: 10
    // vote_count: 3
    
    function getDivTable(items) {
        var tableContent = [];

        items.map((item, index) => {
            debugger;
            tableContent.push(<ItemBody key={index} title={item.title} genre={item.genres.join(' ')} image={item.poster_path} releaseDate={item.runtime + 1900}/>);
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