import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './row.scss';

const cx = classnames.bind(styles);

const Row = (props) => {
  const {
    children, direction, position,
  } = props;

  return (
    <div className={cx('grid', {
      [`grid--${direction}`]: direction,
      [`grid--position-${position}`]: position,
    })}
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  direction: 'row',
  position: 'center',
};

Row.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
  position: PropTypes.string,
};

export default Row;
