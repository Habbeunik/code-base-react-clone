import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const StartProcess1Icon = require('../../assets/images/start-process1.svg');
const StartProcess2Icon = require('../../assets/images/start-process2.svg');
const StartProcess3Icon = require('../../assets/images/start-process3.svg');

function StartProcessIcon(props) {
  const { image, size } = props;
  return (
    <div style={{ padding: '30px 0px' }}>
      <img alt='reason icon' src={image} width={size} height={size} />
    </div>
  );
}

StartProcessIcon.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number
};

StartProcessIcon.defaultProps = {
  size: 60
};

function StartProcess(props) {
  const { title, image } = props;
  return (
    <Grid.Column style={{ textAlign: 'center' }}>
      <div>
        <StartProcessIcon image={image} />
      </div>
      <div>
        <Header
          as='h3'
          style={{ lineHeight: '30px', marginBottom: '10px', fontSize: '19px' }}
        >
          {title}
        </Header>
      </div>
    </Grid.Column>
  );
}

StartProcess.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired
};

function Divider() {
  return (
    <Grid.Column
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '1px',
          background: '#ccc',
          margin: 'auto'
        }}
      />
    </Grid.Column>
  );
}

export default function StartProcessList() {
  return (
    <Grid columns={5}>
      <StartProcess title='Create an account' image={StartProcess1Icon} />
      <Divider />
      <StartProcess title='Link your bank account' image={StartProcess2Icon} />
      <Divider />
      <StartProcess title='Start buying & selling' image={StartProcess3Icon} />
    </Grid>
  );
}
