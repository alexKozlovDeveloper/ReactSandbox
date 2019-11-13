import React, { Component } from "react";

class ItemGenre extends Component {
    render() {
        return (
            <div>
                <div>Genre {this.props.genre}</div>
            </div>
        );
    }
}

export default ItemGenre;