import React, { Component } from "react";

import styles from "../../styles/CustomOptionList.css"

class CustomOptionList extends Component {
    
    constructor(props) {
        super(props);

        this.state = { selectedItem: "option" + this.props.config.selectedIndex };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ selectedItem: e.currentTarget.attributes["name"].nodeValue });
    }
    
    render() {
        var options = this.props.config.options; 
       
        var optionsHtml = [];

        for(var i = 0; i < options.length; i++) {
            var name = "option" + i;
            var itemStyles = styles.item + (this.state.selectedItem === name ? ' ' + styles.isactive : '');

            optionsHtml.push(<div name={name} key={i} onClick={this.handleClick} className={itemStyles}>{options[i]}</div>);
        }

        return (
            <div className={styles.container}>
                <div className={styles.title}>{this.props.config.title}</div>
                {optionsHtml}
           </div>
        );
    }
}

export default CustomOptionList;