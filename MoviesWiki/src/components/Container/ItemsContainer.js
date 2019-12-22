import React from 'react';
import PropTypes from 'prop-types';

import ItemBody from './ItemBody';
import NoItemLabel from './NoItemLabel';

import styles from '../../styles/ItemsContainer.css';

const ItemsContainer = ({ items }) => {
  function getDivTable(objs) {
    const tableContent = objs.map((item, index) => <ItemBody key={index} item={item} />);

    return tableContent;
  }

  let table;

  if (items.length !== 0) {
    table = getDivTable(items);
  } else {
    table = (<NoItemLabel />);
  }

  return (
        <div className={styles.container} >
            {table}
        </div>
  );
};

ItemsContainer.propTypes = {
  items: PropTypes.array,
};

export default ItemsContainer;
