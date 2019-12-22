import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/Genre.css';

const Genre = ({ genre }) => <div className={styles.genre}>
        {genre}
    </div>;

Genre.propTypes = {
  genre: PropTypes.string,
};

export default Genre;
