import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from '../../styles/BackButton.css';

const BackButton = ({ buttonText }) => <Link to="/" className={styles.button}>{buttonText}</Link>;

BackButton.propTypes = {
  buttonText: PropTypes.string,
};

export default BackButton;
