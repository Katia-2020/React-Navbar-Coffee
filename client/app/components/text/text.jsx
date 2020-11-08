import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './text.scss';

const cx = classnames.bind(styles);

const Text = (props) => {
  const {
    bold, upper, theme, text,
  } = props;

  return (
    <div className={cx('text', {
      'text--bold': bold,
      'text--upper': upper,
      [`text--theme-${theme}`]: theme,
    })}
    >
      {text}
    </div>
  );
};


Text.propTypes = {
  bold: PropTypes.bool,
  upper: PropTypes.bool,
  theme: PropTypes.string,
  text: PropTypes.string,
};

export default Text;
