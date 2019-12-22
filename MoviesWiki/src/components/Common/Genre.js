import React, { Component } from 'react';

import styles from '../../styles/Genre.css';

const Genre = ({ genre }) => <div className={styles.genre}>
        {genre}
    </div>;

export default Genre;
