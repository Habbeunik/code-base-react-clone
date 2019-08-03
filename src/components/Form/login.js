import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import { Input } from '.';

export default function LoginForm() {
  return (
    <Form>
      <Form.Group widths='equal'>
        <Input name='email' placeholder='Email' label='Email' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Input
          name='password'
          type='password'
          placeholder='Password'
          label='Password'
        />
      </Form.Group>
      <p style={{ margin: '20px 0px' }}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Checkbox}
            label={
              (<label style={{ fontWeight: 'bold', fontSize: '15px', lineHeight: '20px' }}>
                Keep me signed into this computer
              </label>)
            }
          />
        </Form.Group>
      </p>
      <p style={{ textAlign: 'center' }}>
        <Button
          fluid
          className='seconday-button'
          style={{
            background: '#1652f0 !important',
            padding: '30px 0px',
            color: '#fff',
            marginBottom: '0px !important'
          }}
        >
          Create Account
        </Button>
      </p>
    </Form>
  );
}
