import React, { Component } from "react";

import styles from "../../styles/CustomOptionList.css"

class CustomOptionList extends Component {
    
    constructor(props) {
        super(props);

        this.state = { selectedItem: "option" + this.props.config.selectedIndex };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        //debugger;
        this.setState({ selectedItem: e.currentTarget.attributes["name"].nodeValue });
        this.props.updateFunc(e.currentTarget.innerText);
    }
    
    render() {
        var options = this.props.config.options; 
       
        var optionsHtml = [];

        options.map((option, index) => {
            var name = "option" + index;
            var itemStyles = styles.item + (this.state.selectedItem === name ? ' ' + styles.isactive : '');

            optionsHtml.push(<div name={name} key={index} onClick={this.handleClick} className={itemStyles}>{option}</div>);
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