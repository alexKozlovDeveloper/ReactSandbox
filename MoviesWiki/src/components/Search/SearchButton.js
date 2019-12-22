import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/SearchButton.css';

const SearchButton = ({ buttonText, updateFunc }) => <button className={styles.button} onClick={() => updateFunc()}>{buttonText}</button>;

SearchButton.propTypes = {
  buttonText: PropTypes.string,
  updateFunc: PropTypes.func,
};

export default SearchButton;
