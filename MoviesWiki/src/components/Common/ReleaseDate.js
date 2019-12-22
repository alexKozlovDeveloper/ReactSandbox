import React, { Component } from 'react';

import styles from '../../styles/ReleaseDate.css';

const ReleaseDate = ({ releaseDate }) => <div className={styles.releasedate}>
        {releaseDate}
    </div>;

export default ReleaseDate;
