import React from 'react';
import { Input } from './index';
import { Button } from 'semantic-ui-react';

export default function GetStaredForm() {
  return (
    <form style={{ display: 'flex' }}>
      <Input
        placeholder='Email Address'
        wrapperStyle={{
          width: 'calc(100% - 115px)',
          marginRight: '15px',
          marginBottom: '0px !important'
        }}
      />
      <Button size='large' className='big-button' style={{ width: '150px' }}>
        Get Started
      </Button>
    </form>
  );
}
