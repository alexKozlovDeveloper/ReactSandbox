import React from 'react';

import styles from '../../styles/ResultsCount.css';

const ResultsCount = ({ count, title }) => <div className={styles.container}>
        {count} {title}
    </div>;

export default ResultsCount;
