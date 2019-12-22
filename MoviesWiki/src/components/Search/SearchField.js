import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/SearchField.css';

const SearchField = ({
  placeHolder, updateFunc, submitFunc, searchText,
}) => <input defaultValue={searchText} className={styles.searchfield} type="text" placeholder={placeHolder} onInput={(e) => updateFunc(e.currentTarget.value)} onKeyDown={(e) => submitFunc(e)} />;


SearchField.propTypes = {
  placeHolder: PropTypes.string,
  updateFunc: PropTypes.func,
  submitFunc: PropTypes.func,
  searchText: PropTypes.string,
};

export default SearchField;
