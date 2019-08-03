import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import LoginForm from '../../components/Form/login';
import { Link } from 'react-router-dom';

import 'pure-react-carousel/dist/react-carousel.es.css';

function Login() {
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
          Login
        </p>
        <LoginForm />
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
                Don't have an Account? Sign up
              </p>
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
