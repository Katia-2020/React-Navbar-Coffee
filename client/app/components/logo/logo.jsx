import React from 'react';
import classnames from 'classnames/bind';
import styles from './logo.scss';

const cx = classnames.bind(styles);

const Logo = (props) => {
  const {
    size, option,
  } = props;

  return (
    <div className={cx('logo', {
      [`logo--size-${size}`]: size,
      'logo--bkgr': option,
    })}
    >
      <img src="https://seeklogo.com/images/C/Costa_Coffee-logo-DC0FF384B3-seeklogo.com.png" alt="logo" />
    </div>
  );
};

export default Logo;
