import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './column.scss';

const cx = classnames.bind(styles);

const Column = (props) => {
  const {
    children, grow, shrink,
  } = props;

  return (
    <div
      className={cx('grid__item', {
        'grid__item--grow': grow,
        'grid__item--shrink': shrink,
      })}
    >
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
};

export default Column;
