import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

import 'pure-react-carousel/dist/react-carousel.es.css';
import RegisterForm from '../../components/Form/register';

function Signup() {
  return (
    <div className='primary-background signup-page'>
      <Container as='div' className='Home'>
        <p
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: '30px',
            marginBottom: '50px'
          }}
        >
          Create Your Account
        </p>
        <Grid stackable centered text>
          <Grid.Column
            width={7}
            as='div'
            className='page-card'
            style={{ borderRadius: '5px', padding: '25px' }}
          >
            <RegisterForm />
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column>
            <p
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: '16px',
                marginBottom: '50px'
              }}
            >
              Already have a Coinbase account? Log in
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
