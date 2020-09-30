import React from 'react';
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../ErrorPage/Errorpage';
import LandingPage from '../../Routes/Landing/LandingPage';
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';
import './App.css';

const App = (props: any): JSX.Element => {
  return (
    <Fragment>
      <main>
        <ErrorPage>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </ErrorPage>
      </main>
    </Fragment>
  );
};

export default App;
