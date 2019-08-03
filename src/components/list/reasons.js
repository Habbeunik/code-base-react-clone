import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Reason1Icon = require('../../assets/images/reason1.svg');
const Reason2Icon = require('../../assets/images/reason2.svg');
const Reason3Icon = require('../../assets/images/reason3.svg');

function ReasonIcon(props) {
  const { image, size } = props;
  return (
    <div style={{ padding: '50px 0px' }}>
      <img alt='reason icon' src={image} width={size} height={size} />
    </div>
  );
}

ReasonIcon.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number
};

ReasonIcon.defaultProps = {
  size: 60
};

function Reason(props) {
  const { title, body, image } = props;
  return (
    <Grid.Column style={{ textAlign: 'center' }}>
      <div>
        <ReasonIcon image={image} />
      </div>
      <div>
        <Header
          as='h3'
          style={{ lineHeight: '30px', marginBottom: '10px', fontSize: '19px' }}
        >
          {title}
        </Header>
        <p
          style={{
            lineHeight: '25px',
            fontSize: '16px',
            margin: '25px 0px',
            opacity: 0.6
          }}
        >
          {body}
        </p>
        <a href='/'>Learn More</a>
      </div>
    </Grid.Column>
  );
}

Reason.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired
};

export default function ReasonList() {
  return (
    <Grid columns={3} style={{ paddingBottom: '50px' }} stackable>
      <Reason
        title='Manage your portfolio'
        body='Buy and sell popular digital currencies, keep track of them in the one place'
        image={Reason1Icon}
      />
      <Reason
        title='Recurring buys'
        body='Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.'
        image={Reason2Icon}
      />
      <Reason
        title='Vault protection'
        body='For added security, store your funds in a vault with time delayed withdrawals.'
        image={Reason3Icon}
      />
    </Grid>
  );
}
