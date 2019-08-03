import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './modules/landing';
import { Helmet } from 'react-helmet';

// css
import 'semantic-ui-css/semantic.min.css';
import './styles/main.css';

const App = () => (
  <React.Fragment>
    <Helmet>
      <link
        href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
        rel='stylesheet'
      />
    </Helmet>
    <Switch>
      <Index />
    </Switch>
  </React.Fragment>
);

export default App;
