import React from 'react';
import { Container, Grid, List, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const productListItem = [
  { anchor: 'Coinbase', url: '/' },
  { anchor: 'Commerce', url: '/' },
  { anchor: 'Custody', url: '/' },
  { anchor: 'Earn', url: '/' },
  { anchor: 'Pro', url: '/' },
  { anchor: 'USD Coin', url: '/' },
  { anchor: 'Wallet', url: '/' },
  { anchor: 'Ventures', url: '/' }
];

const learnListItem = [
  { anchor: 'Coinbase', url: '/' },
  { anchor: 'Commerce', url: '/' },
  { anchor: 'Custody', url: '/' },
  { anchor: 'Earn', url: '/' },
  { anchor: 'Pro', url: '/' },
  { anchor: 'USD Coin', url: '/' },
  { anchor: 'Wallet', url: '/' },
  { anchor: 'Ventures', url: '/' }
];

const companyListItem = [
  { anchor: 'Coinbase', url: '/' },
  { anchor: 'Commerce', url: '/' },
  { anchor: 'Custody', url: '/' },
  { anchor: 'Earn', url: '/' },
  { anchor: 'Pro', url: '/' },
  { anchor: 'USD Coin', url: '/' },
  { anchor: 'Wallet', url: '/' },
  { anchor: 'Ventures', url: '/' }
];

const socialListItem = [
  { anchor: 'Coinbase', url: '/' },
  { anchor: 'Commerce', url: '/' },
  { anchor: 'Custody', url: '/' },
  { anchor: 'Earn', url: '/' },
  { anchor: 'Pro', url: '/' },
  { anchor: 'USD Coin', url: '/' },
  { anchor: 'Wallet', url: '/' },
  { anchor: 'Ventures', url: '/' }
];

function FooterList(props) {
  const { heading, list } = props;
  const listItems = list.map((item, idx) => (
    <List.Item
      as='a'
      href={item.url}
      key={idx.toString()}
      style={{
        fontSize: '15px',
        margin: '5px 0px',
        color: '#838fa0'
      }}
    >
      {item.anchor}
    </List.Item>
  ));

  return (
    <List>
      <List.Item as={Header}>{heading}</List.Item>
      {listItems}
    </List>
  );
}

FooterList.propTypes = {
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.exact({
      anchor: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default function Footer() {
  return (
    <Container className='segmentContainer'>
      <Grid columns={5} stackable>
        <Grid.Column>
          <Header>Coinbase</Header>
        </Grid.Column>
        <Grid.Column>
          <FooterList heading='Products' list={productListItem} />
        </Grid.Column>
        <Grid.Column>
          <FooterList heading='Learn' list={learnListItem} />
        </Grid.Column>
        <Grid.Column>
          <FooterList heading='Company' list={companyListItem} />
        </Grid.Column>
        <Grid.Column>
          <FooterList heading='Social' list={socialListItem} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
