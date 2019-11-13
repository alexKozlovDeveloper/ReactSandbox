import React, { Component } from "react";

class ItemImage extends Component {
    render() {
        return (
            <div>
                <div>Image {this.props.image}</div>
            </div>
        );
    }
}

export default ItemImage;