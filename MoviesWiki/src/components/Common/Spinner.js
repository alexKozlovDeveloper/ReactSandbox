import React, { Component } from 'react';

import styles from '../../styles/Spinner.css';

const Spinner = () => <div className={styles.spinnercontainer}>
        <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>;

export default Spinner;
