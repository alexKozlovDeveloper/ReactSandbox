import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import Rating from '../components/Common/Rating';
import CustomOptionList from '../components/Common/CustomOptionList';
import Footer from '../components/Footer';


export default {
  title: 'Movie Views',
  component: Button,
};

export const RatingComponent = () => (
  <Rating rating='7.8' />
);

export const FooterComponent = () => (
    <Footer rating='7.8' />
  );

const customOptionListConfig = {
    title: 'Sort by',
    options: [{
      title: 'Release date',
      value: 'release_date',
    }, {
      title: 'Rating',
      value: 'vote_average',
    }],
  }

  export const CustomOptionListComponent = () => (
    <CustomOptionList config={customOptionListConfig} />
  );
