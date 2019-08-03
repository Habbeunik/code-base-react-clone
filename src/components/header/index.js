import React from 'react';
import { Container, Grid, Header, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

import './header.css';

export class LandingHeader extends React.PureComponent {
  state = {
    isFixed: false
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      console.log('scroll position', window.scrollY);
      if (window.scrollY > 120) this.fixHeader();
      else this.unFixHeader();
    });
  }

  fixHeader = () => this.setState({ isFixed: true });

  unFixHeader = () => this.setState({ isFixed: false });

  render() {
    const { isFixed } = this.state;
    const textColor = isFixed ? '#333' : '#fff';

    return (
      <div className={isFixed ? 'header-box-fixed' : 'header-box'}>
        <Container>
          <Grid>
            <Grid.Column
              width={4}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Link to='/'>
                <Header as='h2' style={{ color: isFixed ? '#1652f0' : '#fff' }}>
                  coinbase
                </Header>
              </Link>
            </Grid.Column>
            <Grid.Column
              width={8}
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <List horizontal>
                <List.Item
                  className='small-text'
                  a='div'
                  style={{ color: textColor }}
                >
                  Products
                </List.Item>
                <List.Item
                  a='div'
                  className='small-text'
                  style={{ color: textColor, marginLeft: '40px !important' }}
                >
                  Price
                </List.Item>
                <List.Item
                  a='div'
                  className='small-text'
                  style={{ color: textColor, marginLeft: '40px !important' }}
                >
                  Company
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column
              width={4}
              as='div'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
              floated='left'
            >
              <List
                horizontal
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <List.Item
                  as={Link}
                  to='/login'
                  style={{ color: textColor }}
                  className='small-text'
                >
                  Sign in
                </List.Item>
                <List.Item as='div'>
                  <Button
                    inverted={!isFixed}
                    as={Link}
                    to='/signup'
                    size='huge'
                    className='small-text'
                    style={{
                      padding: '16px !important',
                      marginLeft: '20px',
                      ...(isFixed && { background: '#05b169', color: '#fff' })
                    }}
                  >
                    Get Started
                  </Button>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default LandingHeader;
