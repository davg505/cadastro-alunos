// src/components/AlunoForm.js
import React, { useState } from 'react';

const AlunoForm = ({ onAddAluno }) => {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [instituicao, setInstituicao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAluno({ nome, curso, instituicao });
    setNome('');
    setCurso('');
    setInstituicao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Curso:</label>
        <input
          type="text"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />
      </div>
      <div>
        <label>Instituição:</label>
        <input
          type="text"
          value={instituicao}
          onChange={(e) => setInstituicao(e.target.value)}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default AlunoForm;
