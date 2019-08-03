import React from 'react';
import { Input } from './index';
import { Button, Grid } from 'semantic-ui-react';

export default function GetStaredForm() {
  return (
    <form>
      <Grid centered>
        <Grid.Column
          tablet={11}
          computer={11}
          mobile={16}
          style={{
            padding: '0px',
            paddingRight: '15px',
            marginTop: '15px',
            paddingLeft: '15px'
          }}
        >
          <Input
            placeholder='Email Address'
            wrapperStyle={{
              marginRight: '15px',
              marginBottom: '0px !important',
              width: '100%'
            }}
          />
        </Grid.Column>
        <Grid.Column
          tablet={5}
          computer={5}
          mobile={16}
          style={{
            padding: '0px',
            paddingRight: '15px',
            marginTop: '15px',
            paddingLeft: '15px'
          }}
        >
          <Button
            size='large'
            className='big-button'
            style={{ width: '100%', height: '100%', boxSizing: 'border-box' }}
          >
            Get Started
          </Button>
        </Grid.Column>
      </Grid>
    </form>
  );
}
