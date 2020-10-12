import React from 'react';
import classnames from 'classnames/bind';
import { Row, Column } from '../grid';
import Text from '../text';
import Icon from '../icon';
import styles from './navbarItem.scss';

const cx = classnames.bind(styles);

const NavbarItem = (props) => {
  const {
    active, icon, type, onClick,
  } = props;

  const handleClick = () => {
    onClick(type);
  };

  return (
    <div
      className={cx('navbar__item', {
        'navbar__item--active': active,
      })}
      onClick={() => { handleClick(); }}
    >
      <Row
        position="baseline"
      >
        <Column>
          <Icon
            icon={icon}
            theme={active
              ? 'bright'
              : 'brick'}
          />
        </Column>

        <Column>
          <Text
            bold
            upper
            theme={active
              ? 'bright'
              : 'brick'}
            text={type}
          />
        </Column>

      </Row>
    </div>
  );
};

export default NavbarItem;
