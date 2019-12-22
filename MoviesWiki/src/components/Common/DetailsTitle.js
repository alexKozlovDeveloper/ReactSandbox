import React, { Component } from 'react';

import styles from '../../styles/DetailsTitle.css';

const DetailsTitle = ({ title }) => <div className={styles.title}>
        {title}
    </div>;

export default DetailsTitle;
