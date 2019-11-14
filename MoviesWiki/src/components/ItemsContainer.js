import React, { Component } from "react";

import ItemBody from "./ItemBody";

import styles from "../styles/ItemsContainer.css"

class ItemsContainer extends Component {
    render() {
        return (
            <div className={styles.container}>
            <table>
                <tr>
                    <td>
                        <ItemBody title="Interstellar" genre="Adventure, Drama, Sci-Fi" image="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg" releaseDate="2014" />
                    </td>
                    <td>
                        <ItemBody title="Interstellar" genre="Adventure, Drama, Sci-Fi" image="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg" releaseDate="2014" />
                    </td>
                    <td>
                        <ItemBody title="Interstellar" genre="Adventure, Drama, Sci-Fi" image="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg" releaseDate="2014" /> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <ItemBody title="Interstellar" genre="Adventure, Drama, Sci-Fi" image="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg" releaseDate="2014" />
                    </td>
                    <td>
                        <ItemBody title="Interstellar" genre="Adventure, Drama, Sci-Fi" image="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg" releaseDate="2014" />
                    </td>
                    <td>
                        <ItemBody title="Interstellar" genre="Adventure, Drama, Sci-Fi" image="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg" releaseDate="2014" /> 
                    </td>
                </tr>
            </table>
            </div>
        );
    }
}

export default ItemsContainer;