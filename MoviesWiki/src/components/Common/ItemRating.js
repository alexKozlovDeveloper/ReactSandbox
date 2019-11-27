import React, { Component, useMemo } from "react";

import styles from "../../styles/ItemRating.css"

const ItemRating = ({ rating }) => {
    return useMemo(()=> {
        return  <div className={styles.title}>
                    {rating}
                </div>
    });
}

export default ItemRating;