import React, { Component } from "react";

class ItemReleaseDate extends Component {
    render() {
        return (
            <div>
                <div>Release Date {this.props.releaseDate}</div>
            </div>
        );
    }
}

export default ItemReleaseDate;