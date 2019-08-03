import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import 'pure-react-carousel/dist/react-carousel.es.css';
import LoginForm from '../../components/Form/login';

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
        <Grid stackable centered text>
          <Grid.Column
            width={7}
            as='div'
            className='page-card'
            style={{ borderRadius: '5px', padding: '25px' }}
          >
            <LoginForm />
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
              Don't have an Account? Sign up
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
