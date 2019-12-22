import React, { Component } from 'react';

import styles from '../../styles/YearAndDuration.css';

const YearAndDuration = ({ year, duration }) => <>
        <div className={styles.container}>
            <div className={styles.number}>{year}</div>
            <div className={styles.string}>year</div>
        </div>
        <div className={styles.container}>
            <div className={styles.number}>{duration}</div>
            <div className={styles.string}>min</div>
        </div>
</>;

export default YearAndDuration;
