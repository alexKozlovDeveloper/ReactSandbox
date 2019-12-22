import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search/Search';

import styles from '../styles/Header.css';

const Header = ({ config }) => (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headertitle}>{config.title}</div>
                <Search config={config.searchConfig} />
            </div>
        </div>
);

Header.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.string,
    searchConfig: PropTypes.object,
  }),
};

export default Header;
