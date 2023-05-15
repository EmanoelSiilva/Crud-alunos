// Obtenha uma referência ao elemento da tabela HTML
const alunosTable = document.getElementById('alunos-table').getElementsByTagName('tbody')[0];

// Faça uma solicitação fetch para buscar os dados da tabela no seu servidor backend
fetch('http://localhost:3000/api/lista')
   .then(response => response.json()) // Converta a resposta HTTP em um objeto JavaScript
   .then(data => {
      // Para cada objeto na resposta, crie uma nova linha na tabela HTML e insira os dados da tabela nele
      data.forEach(aluno => {
         const row = alunosTable.insertRow();
         row.insertCell(0).innerHTML = aluno.nome;
         row.insertCell(1).innerHTML = aluno.dataNasc;
         row.insertCell(2).innerHTML = aluno.matricula;
         row.insertCell(3).innerHTML = aluno.email;
         row.insertCell(4).innerHTML = aluno.status;
      });
   })
   .catch(error => {
      console.error('Erro ao buscar os dados da tabela:', error);
   });
