import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/DetailsTitle.css';

const DetailsTitle = ({ title }) => <div className={styles.title}>
        {title}
    </div>;

DetailsTitle.propTypes = {
  title: PropTypes.string,
};

export default DetailsTitle;
