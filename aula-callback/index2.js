import fs from 'fs';

let alunos;

fs.readFile('./alunos.json', (erro, dados) => {
    if(erro) {
        console.error(erro);
        return;
    }
    alunos = JSON.parse(dados);
    console.log('alunos:', alunos);
});

