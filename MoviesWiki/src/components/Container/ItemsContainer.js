import React, { Component } from 'react';

import ItemBody from './ItemBody';
import NoItemLabel from './NoItemLabel';

import styles from '../../styles/ItemsContainer.css';

const ItemsContainer = ({ items }) => {
  function getDivTable(items) {
    const tableContent = items.map((item, index) => <ItemBody key={index} item={item} />);

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

export default ItemsContainer;
