import React, { Component } from "react";
import { connect } from 'react-redux'

import Title from "../Common/Title";
import Genre from "../Common/Genre";
import Image from "../Common/Image";
import ReleaseDate from "../Common/ReleaseDate";
import Rating from "../Common/Rating";
import { updateSelectedItem } from "../../actions/index";

import { Link } from 'react-router-dom'

import styles from "../../styles/ItemBody.css"

class ItemBody extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.updateSelectedItemFunc(this.props.item);
    }

    render() {
        return (
            <Link to="/view" className={styles.body} onClick={this.handleClick}>
                <Image image={this.props.item.poster_path} />
                <ReleaseDate releaseDate={this.props.item.release_date} />
                <Title title={this.props.item.title} />
                <Genre genre={this.props.item.genres.join(' ')} />
                <Rating rating={this.props.item.vote_average} />
            </Link>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSelectedItemFunc: (item) => {
            dispatch(updateSelectedItem(item))
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemBody);
