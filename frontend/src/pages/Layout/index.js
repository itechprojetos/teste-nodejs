import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { isAuthenticated, logout } from '../../services/auth';

import { Container, Header, Admin } from './styles';

export default function Layout() {
  useEffect(() => {}, [isAuthenticated]);

  const history = new useHistory();

  return (
    <>
      <Container>

        <Header>
          <p onClick={(e) => {
            e.preventDefault()
            history.push('/')
          }}>Candidatar!</p>
          <Admin>

            {
              isAuthenticated() ?
                <>
                  <p onClick={(e) => {
                    e.preventDefault()
                    history.push('/admin')
                  }}>Painel administrativo</p>
                  <p onClick={(e) => {
                    e.preventDefault()
                    logout();
                    window.location = '/';
                  }}>Sair</p>
                </>
              :
                <>
                  <p onClick={(e) => {
                    e.preventDefault()
                    history.push('/login')
                  }}>Login</p>
                  <p onClick={(e) => {
                    e.preventDefault()
                    history.push('/register')
                  }}>Registro</p>
                </>
              }

          </Admin>
        </Header>

      </Container>
    </>
  );
}
