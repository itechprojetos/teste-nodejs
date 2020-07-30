import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import GlobalStyle from './styles/global';
import Layout from './pages/Layout';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'
import Admin from './pages/Admin'
import EditCandidate from './pages/Admin/Edit/EditCandidate'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login">
          {!isAuthenticated() ? <SignIn /> : <Redirect to="admin" />}
        </Route>

        <Route path="/register">
          {!isAuthenticated() ? <SignUp /> : <Redirect to="admin" />}
        </Route>

        <Route path="/admin" exact>
          {isAuthenticated() ? <Admin /> : <Redirect to="login" />}
        </Route>

        <Route path="/admin/edit/:candidateId">
          {isAuthenticated() ? <EditCandidate /> : <Redirect to="login" />}
        </Route>
      </Switch>

    </BrowserRouter>
  );
}
