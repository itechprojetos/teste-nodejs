import React, { useState } from 'react';

import api from '../../services/api';
import { Container, UserInfo, InfoForm, AbilityForm, UserAbility, Button } from './styles';

export default function Home() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [skype, setSkype] = useState(null);
  const [phone, setPhone] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [city, setCity] = useState(null);
  const [uf, setUf] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [salary, setSalary] = useState(null);
  const [aditional, setAditional] = useState(null);
  const [crud, setCrud] = useState(null);

  const [available, setAvailable] = useState(0);
  const [hour, setHour] = useState(0);
  const [javascript, setJs] = useState(0);
  const [node, setNode] = useState(0);
  const [react, setReact] = useState(0);
  const [express, setExpress] = useState(0);
  const [mongo, setMongo] = useState(0);

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changeName(e) {
    setName(e.target.value);
  }

  function changeSkype(e) {
    setSkype(e.target.value);
  }

  function changePhone(e) {
    setPhone(e.target.value);
  }

  function changeLinkedin(e) {
    setLinkedin(e.target.value);
  }

  function changeCity(e) {
    setCity(e.target.value);
  }

  function changeUf(e) {
    setUf(e.target.value);
  }

  function changePortfolio(e) {
    setPortfolio(e.target.value);
  }

  function changeSalary(e) {
    setSalary(e.target.value);
  }

  function changeAditional(e) {
    setAditional(e.target.value);
  }

  function changeCrud(e) {
    setCrud(e.target.value);
  }

  function changeAvailable(e) {
    setAvailable(e.target.value);
  }

  function changeHour(e) {
    setHour(e.target.value);
  }

  function changeJavascript(e) {
    setJs(e.target.value);
  }

  function changeNode(e) {
    setNode(e.target.value);
  }

  function changeReact(e) {
    setReact(e.target.value);
  }

  function changeExpress(e) {
    setExpress(e.target.value);
  }

  function changeMongo(e) {
    setMongo(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      email,
      name,
      skype,
      phone,
      linkedin,
      city,
      uf,
      portfolio,
      available_time: available,
      work_hour: hour,
      hourly_salary: salary,
      abilities: {
        javascript,
        nodejs: node,
        reactjs: react,
        express,
        mongodb: mongo
      },
      aditional,
      link: crud
    }

    if(email && !email.includes('@')) {
      return alert('Insira um e-mail válido')
    }

    await api.post('/candidate', body).then(response => {
      window.location = '/';
      return alert('Candidatura feita!')
    }).catch(err => {
      return alert('Ocorreu um erro. Tente novamente');
    });
  }

  return(
    <>
      <Container>
        <UserInfo>
          <div className="title">
            <h1>Formulário pessoal</h1>
          </div>
          <InfoForm>
            <form>
              <label>E-mail <input type="email" placeholder="Seu e-mail" required onChange={changeEmail}/></label>
              <label>Nome <input placeholder="Seu nome" required onChange={changeName}/></label>
              <label>Skype <input placeholder="Seu skype" required onChange={changeSkype}/></label>
              <label>Telefone <input type="number" placeholder="Seu número de telefone" required onChange={changePhone}/></label>
              <label>LinkedIn <input placeholder="Seu linkedin" required onChange={changeLinkedin}/></label>
              <label>Cidade <input placeholder="Sua cidade" required onChange={changeCity}/></label>
              <label>Estado <input placeholder="Seu estado" required onChange={changeUf}/></label>
              <label>Portfolio <input placeholder="Link para seu portfolio" required onChange={changePortfolio}/></label>
              <label>Salário/hora <input type="number" min="0" placeholder="Pretenção salarial/hora" required onChange={changeSalary}/></label>

              <br/>

              <span className="options">
                Disponivel para trabalho
              </span>
              <select value={available} onChange={changeAvailable}>
                <option value="1">Até 4h/dia</option>
                <option value="2">De 4 a 6h/dia</option>
                <option value="3">De 6 a 8h/dia</option>
                <option value="4">Acima de 8h/dia</option>
                <option value="5">Apenas finais de semana</option>
              </select>

              <br/>

              <span className="options">
                Melhor horário
              </span>
              <select value={hour} onChange={changeHour}>
                <option value="1">Manhã (08h-12h)</option>
                <option value="2">Tarde (13h-18h)</option>
                <option value="3">Noite (19h-22h)</option>
                <option value="4">Madrugada (após as 22h)</option>
                <option value="5">Comercial (08h-18h)</option>
              </select>
            </form>
          </InfoForm>
        </UserInfo>

        <UserAbility>
          <div className="title">
            <h1>Habilidades e preferências</h1>
          </div>
          <AbilityForm>
            <form>
              <label>
                Avaliação de habilidades
              </label>


              <label className="ability">
                Javascript
                <select value={javascript} onChange={changeJavascript}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label className="ability">
                NodeJS
                <select value={node} onChange={changeNode}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label className="ability">
                ReactJS
                <select value={react} onChange={changeReact}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label className="ability">
                Express
                <select value={express} onChange={changeExpress}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label className="ability">
                MongoDB
                <select value={mongo} onChange={changeMongo}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>

              <br/>

              <label>
                Tem mais alguma habilidade? Adicione ela no campo abaixo e avalie de 0 a 5
              </label>
              <input className="aditional" onChange={changeAditional}/>

              <br/>
              <br/>

              <label>Adicione o link para seu CRUD no campo abaixo</label>
              <input required onChange={changeCrud}/>
            </form>
          </AbilityForm>
        </UserAbility>

        <Button>
          <h1 onClick={handleSubmit}>Enviar</h1>
        </Button>
      </Container>
    </>
  );
}
