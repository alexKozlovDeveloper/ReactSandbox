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
                        <ItemBody title="Kill Bill 2" genre="Action" image="https://st.kp.yandex.net/images/film_big/2717.jpg" releaseDate="2003" />
                    </td>
                    <td>
                        <ItemBody title="Kill Bill 2" genre="Action" image="https://st.kp.yandex.net/images/film_big/2717.jpg" releaseDate="2003" />
                    </td>
                    <td>
                        <ItemBody title="Kill Bill 2" genre="Action" image="https://st.kp.yandex.net/images/film_big/2717.jpg" releaseDate="2003" /> 
                    </td>
                </tr>
            </table>
            </div>
        );
    }
}

export default ItemsContainer;