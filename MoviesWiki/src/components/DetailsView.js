import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Image from './Common/Image';
import DetailsTitle from './Common/DetailsTitle';
import Rating from './Common/Rating';
import Description from './Common/Description';
import YearAndDuration from './Common/YearAndDuration';
import BackButton from './Common/BackButton';
import DetailsViewNoItemLabel from './Common/DetailsViewNoItemLabel';

import styles from '../styles/DetailsView.css';


class DetailsView extends Component {
  render() {
    let content;

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
                <BackButton buttonText="" />
      </>);
    } else {
      content = (<DetailsViewNoItemLabel></DetailsViewNoItemLabel>);
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
    item: selectedItem,
  };
}

DetailsView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    vote_average: PropTypes.string,
    runtime: PropTypes.string,
    overview: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(DetailsView);
