import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { Container, Register } from './styles';

export default function SignUp() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const history = useHistory();

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changeName(e) {
    setName(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post('/admin/register', { name: name, email: email, password: password }).then(response => {
      if(response.status === 200) {
        alert('Registrado!')
        return window.location = '/login';
      }
      return alert('Houve um erro. Tente novamente')
    }).catch((err) => {
      return alert('Falha na tentativa de cadastro. Verifique os campos e tente novamente');
    });
  }

  return (
    <>
      <Container>
        <Register>
          <form onSubmit={handleSubmit}>
            <label>E-mail <input type="email" placeholder="Insira seu email" required onChange={changeEmail} /></label>
            <label>Nome <input placeholder="Insira seu nome" required onChange={changeName} /></label>
            <label>Senha <input type="password" placeholder="Insira sua senha" required onChange={changePassword} /></label>
            <button>Registrar!</button>
          </form>
        </Register>
      </Container>
    </>
  );
}
