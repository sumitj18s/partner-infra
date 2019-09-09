import React from 'react';
import PropTypes from 'prop-types';
import { Sort, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import SORTING from './constants';

function SortIcon({ order }) {
  switch (order) {
    case SORTING.ASC:
      return <KeyboardArrowUp fontSize="small" />;
    case SORTING.DESC:
      return <KeyboardArrowDown fontSize="small" />;
    case SORTING.DEFAULT:
      return <Sort fontSize="small" />;
    default:
      return <Sort fontSize="small" />;
  }
}

SortIcon.propTypes = {
  order: PropTypes.oneOf([SORTING.ASC, SORTING.DESC, SORTING.DEFAULT])
    .isRequired,
};

export default SortIcon;
