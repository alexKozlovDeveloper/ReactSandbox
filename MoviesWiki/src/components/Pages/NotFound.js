import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/NotFound.css';

const NotFound = () => <div className={styles.notfound}>
        Oops... this page is not found (404)! <br/>
        what about our <Link to="/">Home</Link> page?
            </div>;

export default NotFound;
