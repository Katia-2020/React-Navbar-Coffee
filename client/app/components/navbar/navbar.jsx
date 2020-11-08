import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.scss';
import { Row, Column } from '../grid';
import NavbarItem from '../navbarItem';

const navProps = [
  {
    id: 0,
    icon: 'coffeeOne',
    type: 'latte',
  },
  {
    id: 1,
    icon: 'coffeeTwo',
    type: 'espresso',
  },
  {
    id: 2,
    icon: 'coffeeThree',
    type: 'americano',
  },
];

const Navbar = (props) => {
  const {
    option, onButtonClick,
  } = props;

  return (
    <div className={styles.navbar}>
      <Row>
        {navProps.map((item) => {
          const isClicked = option === item.type;
          return (
            <Column key={item.id}>
              <NavbarItem
                active={isClicked}
                icon={item.icon}
                type={item.type}
                onClick={onButtonClick}
              />
            </Column>
          );
        })}
      </Row>
    </div>
  );
};

Navbar.defaultProps = {
  onButtonClick: () => {},
};

Navbar.propTypes = {
  option: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Navbar;
