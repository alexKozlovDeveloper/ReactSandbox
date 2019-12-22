import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Title from '../Common/Title';
import Genre from '../Common/Genre';
import Image from '../Common/Image';
import ReleaseDate from '../Common/ReleaseDate';
import Rating from '../Common/Rating';
import { updateSelectedItem } from '../../actions/index';


import styles from '../../styles/ItemBody.css';

class ItemBody extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateSelectedItemFunc(this.props.item);
  }

  render() {
    const { id } = this.props.item;

    return (
            <Link to={`/film/${id}`} className={styles.body} onClick={this.handleClick}>
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
      dispatch(updateSelectedItem(item));
    },
  };
}

ItemBody.propTypes = {
  updateSelectedItemFunc: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    vote_average: PropTypes.number,
  }),
};

export default connect(null, mapDispatchToProps)(ItemBody);
