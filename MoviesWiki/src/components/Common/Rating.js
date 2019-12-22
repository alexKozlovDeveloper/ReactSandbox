import React, { Component, useMemo } from 'react';

import styles from '../../styles/Rating.css';

const Rating = ({ rating }) => useMemo(() => <div className={styles.title}>
            {rating}
        </div>);

export default Rating;
