import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/ReleaseDate.css';

const ReleaseDate = ({ releaseDate }) => <div className={styles.releasedate}>
        {releaseDate}
    </div>;

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
};

export default ReleaseDate;
