import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/Form/register';

import 'pure-react-carousel/dist/react-carousel.es.css';

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
        <RegisterForm />
        <Grid>
          <Grid.Column>
            <Link to='/signup'>
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
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
