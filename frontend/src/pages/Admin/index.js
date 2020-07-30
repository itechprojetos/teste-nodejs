import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MdEdit, MdDelete } from 'react-icons/md';

import api from '../../services/api';
import { Container, Candidates, Candidate } from './styles';

export default function Admin() {
  const history = useHistory();
  const [candidates, setCandidates] = useState(0);

  useEffect(() => {
    api.get('/admin/candidate/list').then(response => setCandidates(response.data));
  }, [candidates]);

  if(!candidates) {
    return <p>Carregando...</p>
  }

  function getAvailableTime(number) {
    switch (number) {
      case '5':
        return 'Até 4h/dia'
        break;

      case '4':
        return 'De 4 a 6h/dia'
        break;

      case '3':
        return 'De 6 a 8h/dia'
        break;

      case '2':
        return 'Acima de 8h/dia'
        break;

      case '1':
        return 'Apenas finais de semana'
        break;

      default:
        return ''
        break;
    }
  }

  function getWorkHour(number) {
    switch (number) {
      case '5':
        return 'Manhã (08h-12h)'
        break;

      case '4':
        return 'Tarde (13h-18h)'
        break;

      case '3':
        return 'Noite (19h-22h)'
        break;

      case '2':
        return 'Madrugada (após as 22h)'
        break;

      case '1':
        return 'Comercial (08h-18h)'
        break;

      default:
        return ''
        break;
    }
  }

  async function handleDelete(e, candidateId) {
    e.preventDefault()
    await api.delete(`/admin/candidate/${candidateId}/delete`)
    await api.get('/admin/candidate/list').then(response => setCandidates(response.data));
  }

  async function handleEdit(e, candidateId) {
    e.preventDefault();
    return window.location = `/admin/edit/${candidateId}`;
  }

  const candidateList = candidates.map(candidate => {
    return (
      <li key={candidate._id}>
        <h1>{candidate.name} - {candidate.email} <MdEdit color="green" size="16" onClick={(e) => handleEdit(e, candidate._id)}/> <MdDelete color="red" size="16" onClick={(e) => handleDelete(e, candidate._id)} /></h1>
        <main className="info">
          <p>Informações do candidato</p>
          <span>Skype: {candidate.skype}</span>
          <span>Telefone: {candidate.phone}</span>
          <span>LinkedIn: {candidate.linkedin}</span>
          <span>Cidade: {candidate.city}</span>
          <span>Estado: {candidate.uf}</span>
          <span>Portfolio: {candidate.portfolio}</span>
          <span>Salário desejado: {candidate.hourly_salary}</span>
          <span>Disponivel para trabalho: {getAvailableTime(candidate.available_time)}</span>
          <span>Melhor horário para trabalho: {getWorkHour(candidate.work_hour)}</span>
        </main>

        <aside className="abilities">
          <p>Habilidades</p>
          <span>Javascript: {candidate.abilities.javascript}</span>
          <span>Node.JS: {candidate.abilities.nodejs}</span>
          <span>React.JS: {candidate.abilities.reactjs}</span>
          <span>Express: {candidate.abilities.express}</span>
          <span>MongoDB: {candidate.abilities.mongodb}</span>
          <span>Adicional: {candidate.abilities.aditional !== null ? candidate.abilities.aditional : ''}</span>
          <span>Link para o CRUD: {candidate.link}</span>
        </aside>
      </li>
    );
  })

  return(
    <>
      <Container>
        <Candidates>

          <Candidate>{candidateList}</Candidate>

        </Candidates>
      </Container>
    </>
  );
}
