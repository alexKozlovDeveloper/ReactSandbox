import React, { Component, useMemo } from "react";

import styles from "../../styles/Rating.css"

const Rating = ({ rating }) => {
    return useMemo(()=> {
        return  <div className={styles.title}>
                    {rating}
                </div>
    });
}

export default Rating;