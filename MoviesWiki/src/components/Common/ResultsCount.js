import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/ResultsCount.css';

const ResultsCount = ({ count, title }) => <div className={styles.container}>
        {count} {title}
    </div>;

ResultsCount.propTypes = {
  count: PropTypes.string,
  title: PropTypes.string,
};

export default ResultsCount;
