import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import { Input } from '.';

export default function RegisterForm() {
  return (
    <Form>
      <Form.Group widths='equal'>
        <Input name='firstName' placeholder='First Name' label='First Name' />
        <Input name='lastName' placeholder='Last Name' label='Last Name' />
      </Form.Group>
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
                By continuing I certify that I am 18 years of age, and I agree
                to the <a>User Agreement</a> and <a>Privacy Policy</a>
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
            color: '#fff'
          }}
        >
          Create Account
        </Button>
      </p>
    </Form>
  );
}
