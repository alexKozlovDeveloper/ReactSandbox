import React from 'react';

import styles from '../../styles/SearchButton.css';

const SearchButton = ({ buttonText, updateFunc }) => <button className={styles.button} onClick={() => updateFunc()}>{buttonText}</button>;

export default SearchButton;
