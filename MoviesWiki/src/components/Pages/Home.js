import React from 'react';
import PropTypes from 'prop-types';

import ResultsBody from '../ResultsBody';

import Header from '../Header';
import Footer from '../Footer';

import styles from '../../styles/Home.css';

const Home = ({ resultsBodyConfig, headerConfig }) => <div className={styles.home}>
        <Header config={headerConfig}/>
        <ResultsBody config={resultsBodyConfig}></ResultsBody>
        <Footer />
    </div>;


Home.propTypes = {
  resultsBodyConfig: PropTypes.object,
  headerConfig: PropTypes.object,
};


export default Home;
