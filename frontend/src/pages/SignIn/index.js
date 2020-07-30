import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';
import { Container, Login } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post('/admin/login', { email, password }).then(response => {
      if(response.status === 200) {
        login(response.data.token);
        return window.location = 'admin';
      }
      return alert('Houve um erro. tente novamente')
    }).catch((err) => {
      return alert('Usuário ou senha inválido')
    });
  }

  return (
    <>
      <Container>
        <Login>
          <form onSubmit={handleSubmit}>
            <label>E-mail <input type="email" placeholder="Insira seu email" required onChange={changeEmail} /></label>
            <label>Senha <input type="password" placeholder="Insira sua senha" required onChange={changePassword} /></label>
            <button>Entrar!</button>
          </form>
        </Login>
      </Container>
    </>
  );
}
