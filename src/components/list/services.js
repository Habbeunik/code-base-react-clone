import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Service1Icon = require('../../assets/images/service1.svg');
const Service2Icon = require('../../assets/images/service2.svg');
const Service3Icon = require('../../assets/images/service3.svg');
const Service4Icon = require('../../assets/images/service4.svg');

function ServiceIcon(props) {
  const { image, size } = props;
  return (
    <div
      style={{
        borderRadius: '50%',
        width: '72px',
        height: '72px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'rgba(218, 225, 233, 0.557) 0px 8px 16px'
      }}
    >
      <img alt='service icon' src={image} width={size} height={size} />
    </div>
  );
}

ServiceIcon.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number
};

ServiceIcon.defaultProps = {
  size: 32
};

function Service(props) {
  const { title, body, image } = props;
  return (
    <List.Item style={{ display: 'flex', marginBottom: '30px' }}>
      <ServiceIcon image={image} />
      <List.Content style={{ width: 'calc(100% - 92px)', marginLeft: '20px' }}>
        <List.Header
          as='h3'
          style={{ lineHeight: '30px', marginBottom: '10px', fontSize: '19px' }}
        >
          {title}
        </List.Header>
        <List.Description
          as='p'
          style={{ lineHeight: '25px', fontSize: '16px', opacity: 0.6 }}
        >
          {body}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}

Service.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired
};

export default function ServiceList() {
  return (
    <List>
      <Service
        title='Manage your portfolio'
        body='Buy and sell popular digital currencies, keep track of them in the one place'
        image={Service1Icon}
      />
      <Service
        title='Recurring buys'
        body='Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.'
        image={Service2Icon}
      />
      <Service
        title='Vault protection'
        body='For added security, store your funds in a vault with time delayed withdrawals.'
        image={Service3Icon}
      />
      <Service
        title='Mobile apps'
        body='Stay on top of the markets with the Coinbase app for Android or iOS'
        image={Service4Icon}
      />
    </List>
  );
}
