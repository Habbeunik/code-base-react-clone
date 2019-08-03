import React from 'react';
import { Container, Grid, Header, List, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './header.css';

export class LandingHeader extends React.PureComponent {
  state = {
    isFixed: false
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) this.fixHeader();
      else this.unFixHeader();
    });
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll');
  // }

  fixHeader = () => this.setState({ isFixed: true });

  unFixHeader = () => this.setState({ isFixed: false });

  render() {
    const { isFixed } = this.state;
    const textColor = isFixed ? '#333' : '#fff';
    const getButton = style => (
      <Button
        as={Link}
        to='/signup'
        className='small-text header-button'
        style={{
          padding: '16px',
          marginLeft: '20px',
          color: '#fff',
          background: '#1652f0',
          border: '1px solid #fff',
          fontFamily: 'Century Gothic Regular',
          ...style,
          ...(isFixed && { background: '#05b169', color: '#fff' })
        }}
      >
        Get Started
      </Button>
    );
    return (
      <div className={isFixed ? 'header-box-fixed' : 'header-box'}>
        <Container>
          <Grid>
            <Grid.Column
              width={4}
              style={{ display: 'flex', alignItems: 'center' }}
              floated='left'
            >
              <Link to='/'>
                <Header as='h3' style={{ color: isFixed ? '#1652f0' : '#fff' }}>
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
              only='computer'
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
              floated='right'
              only='computer'
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
                <List.Item as='div'>{getButton()}</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column
              width={10}
              as='div'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
              floated='right'
              only='mobile'
            >
              <div>
                {getButton({ padding: '10px' })}
                <Icon
                  name='bars'
                  size='large'
                  style={{
                    color: isFixed ? '#333' : '#fff',
                    marginLeft: '20px'
                  }}
                />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default LandingHeader;
