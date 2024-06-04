// src/components/AlunoList.js
import React from 'react';

const AlunoList = ({ alunos }) => {
  return (
    <ul>
      {alunos.map((aluno, index) => (
        <li key={index}>
          {aluno.nome} - {aluno.curso} - {aluno.instituicao}
        </li>
      ))}
    </ul>
  );
};

export default AlunoList;
