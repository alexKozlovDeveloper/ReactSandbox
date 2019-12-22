import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/Rating.css';

const Rating = ({ rating }) => useMemo(() => <div className={styles.title}>
            {rating}
        </div>);

Rating.propTypes = {
  rating: PropTypes.string,
};


export default Rating;
