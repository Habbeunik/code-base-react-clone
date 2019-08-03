import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import { LandingHeader } from '../../components/header';
import Signup from './signup';
import Login from './login';

function landingPageWrapper(PageComponent) {
  return function Page(props) {
    return (
      <div className='index-container'>
        <LandingHeader />
        <PageComponent {...props} />
      </div>
    );
  };
}

const HomePage = landingPageWrapper(Home);
const SignupPage = landingPageWrapper(Signup);
const LoginPage = landingPageWrapper(Login);

export default function IndexModule() {
  return (
    <Fragment>
      <Route path='/' exact component={HomePage} />
      <Route path='/signup' exact component={SignupPage} />
      <Route path='/login' exact component={LoginPage} />
    </Fragment>
  );
}
