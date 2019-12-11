import React, { Component } from "react";
import { connect } from 'react-redux'

import Image from "./Common/Image";
import DetailsTitle from "./Common/DetailsTitle";
import Rating from "./Common/Rating";
import Description from "./Common/Description";
import YearAndDuration from "./Common/YearAndDuration";
import BackButton from "./Common/BackButton";
import DetailsViewNoItemLabel from "./Common/DetailsViewNoItemLabel";

import styles from "../styles/DetailsView.css"


class DetailsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var content;

        if (this.props.item != null) {
            content = (<>
                <div className={styles.imagecontainer}>
                    <Image image={this.props.item.poster_path} />
                </div>
                <div className={styles.detailscontainer}>
                    <div className={styles.maintitlecontainer}>
                        <DetailsTitle title={this.props.item.title} />
                        <Rating rating={this.props.item.vote_average} />
                    </div>
                    <div className={styles.propertiescontainer}>
                        <YearAndDuration year={this.props.item.release_date} duration={this.props.item.runtime} />
                    </div>
                    <div className={styles.descriptioncontainer}>
                        <Description description={this.props.item.overview} />
                    </div>
                </div>
                <div>
                    <BackButton buttonText="" />
                </div>
            </>)
        } else {
            content = (<DetailsViewNoItemLabel></DetailsViewNoItemLabel>)
        }

        return (
            <div className={styles.body}>
                {content}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { selectedItem } = state.moviesReducer;

    return {
        item: selectedItem
    };
}

export default connect(mapStateToProps)(DetailsView);
