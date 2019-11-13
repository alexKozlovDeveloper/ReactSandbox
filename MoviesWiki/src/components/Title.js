import React, { Component } from "react";

class Title extends Component {
    render() {
        return (
            <div>
                <div>Title {this.props.name}</div>
            </div>
        );
    }
}

export default Title;