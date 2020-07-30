import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../../services/api';
import { Container, InfoForm, AbilityForm, Button } from './styles';

export default function EditCandidate() {
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

  const [available, setAvailable] = useState(1);
  const [hour, setHour] = useState(1);
  const [javascript, setJs] = useState(0);
  const [node, setNode] = useState(0);
  const [react, setReact] = useState(0);
  const [express, setExpress] = useState(0);
  const [mongo, setMongo] = useState(0);

  const history = useHistory();
  const { candidateId } = useParams();

  useEffect(() => {
    api.get(`/admin/candidate/${candidateId}`).then(res => {
      setEmail(res.data.email || '')
      setName(res.data.name || '')
      setSkype(res.data.skype || '')
      setPhone(res.data.phone || '')
      setLinkedin(res.data.linkedin || '')
      setCity(res.data.city || '')
      setUf(res.data.uf || '')
      setPortfolio(res.data.portfolio || '')
      setSalary(res.data.salary || 0)
      setAditional(res.data.aditional || '')
      setCrud(res.data.crud || '')
      setAvailable(res.data.available_time || 1)
      setHour(res.data.work_hour || 1)
      setJs(res.data.abilities.javascript || 0)
      setReact(res.data.abilities.reactjs || 0)
      setNode(res.data.abilities.nodejs || 0)
      setExpress(res.data.abilities.express || 0)
    }).catch(err => {
      window.location = '/admin'
    });
  }, []);

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
    await api.patch(`/admin/candidate/${candidateId}/update`, {
      email: email,
      name: name,
      skype: skype,
      phone: phone,
      linkedin: linkedin,
      city: city,
      uf: uf,
      portfolio: portfolio,
      available_time: available,
      work_hour: hour,
      hourly_salary: salary,
      javascript: javascript,
      nodejs: node,
      reactjs: react,
      mongodb: mongo,
      express: express,
      aditional: aditional,
      link: crud,
    }).then(response => {
      alert('Dados alterados com sucesso!')
      history.push('/admin');
    }).catch(err => {
      alert('Ocorreu um erro ao atualizar os dados');
      window.location = '/admin'
    });
  }

  return(
    <>
      <Container>
        <InfoForm>
          <form>
            <label>E-mail <input defaultValue={email} type="email" placeholder="Seu e-mail" required onChange={changeEmail}/></label>
            <label>Nome <input defaultValue={name} placeholder="Seu nome" required onChange={changeName}/></label>
            <label>Skype <input defaultValue={skype} placeholder="Seu skype" required onChange={changeSkype}/></label>
            <label>Telefone <input defaultValue={phone} type="number" placeholder="Seu número de telefone" required onChange={changePhone}/></label>
            <label>LinkedIn <input defaultValue={linkedin} placeholder="Seu linkedin" required onChange={changeLinkedin}/></label>
            <label>Cidade <input defaultValue={city} placeholder="Sua cidade" required onChange={changeCity}/></label>
            <label>Estado <input defaultValue={uf} placeholder="Seu estado" required onChange={changeUf}/></label>
            <label>Portfolio <input defaultValue={portfolio} placeholder="Link para seu portfolio" required onChange={changePortfolio}/></label>
            <label>Salário/hora <input defaultValue={salary} type="number" placeholder="Pretenção salarial/hora" required onChange={changeSalary}/></label>

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
            <input defaultValue={aditional} className="aditional" onChange={changeAditional}/>

            <br/>
            <br/>

            <label>Adicione o link para seu CRUD no campo abaixo</label>
            <input defaultValue={crud} required onChange={changeCrud}/>
          </form>
        </AbilityForm>

        <Button>
          <h1 onClick={handleSubmit}>Salvar</h1>
        </Button>
      </Container>
    </>
  );
}
