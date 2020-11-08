import React from 'react';
import styles from './header.scss';
import { Row, Column } from '../grid';
import Logo from '../logo';
import Navbar from '../navbar';
import Button from '../button';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      option: '',
    };
  }

  handleButtonClick(type) {
    this.setState({
      option: type,
    });
  }

  render() {
    const { option } = this.state;

    return (
      <div className={styles.header}>

        <Row>
          <Column shrink>
            <Logo size="medium" option={option} />
          </Column>

          <Column grow>
            <Navbar option={option} onButtonClick={(type) => { this.handleButtonClick(type); }} />
          </Column>

          <Column shrink>
            <Button
              text="order"
              theme="transparent"
              icon="orderIcon"
            />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Header;
