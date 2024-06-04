
import React, { useEffect, useState } from 'react';
import './App.css';
import AlunoForm from './components/AlunoForm';
import AlunoList from './components/AlunoList';

function App() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const storedAlunos = localStorage.getItem('alunos');
    if (storedAlunos) {
      setAlunos(JSON.parse(storedAlunos));
    }
  }, []);

  const addAluno = (aluno) => {
    const newAlunos = [...alunos, aluno];
    setAlunos(newAlunos);
    localStorage.setItem('alunos', JSON.stringify(newAlunos));
  };

  const saveToFile = () => {
    const jsonAlunos = JSON.stringify(alunos, null, 2);
    const blob = new Blob([jsonAlunos], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'alunos.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const clearList = () => {
    setAlunos([]);
    localStorage.removeItem('alunos');
  };


  return (
    <div className="App">
      <h1>Cadastro de Alunos</h1>
      <AlunoForm onAddAluno={addAluno} />
      <AlunoList alunos={alunos} />
      <button onClick={saveToFile}>Salvar Lista</button>
      <button onClick={clearList}>Limpar Lista</button>
    </div>
  );
};

export default App;
