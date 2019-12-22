import React, { Component } from 'react';

import styles from '../../styles/CustomOptionList.css';

class CustomOptionList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedItem: `option${this.props.selectedIndex}` };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ selectedItem: e.currentTarget.attributes.name.nodeValue });
    this.props.updateFunc(e.currentTarget.attributes.value.nodeValue);
  }

  render() {
    const { options } = this.props.config;

    const optionsHtml = options.map((option, index) => {
      const name = `option${index}`;
      const itemStyles = styles.item + (this.state.selectedItem === name ? ` ${styles.isactive}` : '');

      return <div name={name} key={index} onClick={this.handleClick} className={itemStyles} value={option.value}>{option.title}</div>;
    });

    return (
            <div className={styles.container}>
                <div className={styles.title}>{this.props.config.title}</div>
                {optionsHtml}
            </div>
    );
  }
}

export default CustomOptionList;
