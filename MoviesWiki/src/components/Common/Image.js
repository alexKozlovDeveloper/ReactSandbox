import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/Image.css';

const Image = ({ image }) => <div className={styles.imagecontainer}>
        <img className={styles.image} src={image}></img>
    </div>;

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
