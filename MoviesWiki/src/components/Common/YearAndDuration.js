import React from 'react';
import PropTypes from 'prop-types';

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

YearAndDuration.propTypes = {
  year: PropTypes.string,
  duration: PropTypes.string,
};

export default YearAndDuration;
