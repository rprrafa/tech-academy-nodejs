import fs from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

let alunos;

readFilePromise('./aluno.json').then((dados) => {
    alunos = JSON.parse(dados);
    console.log(alunos);
}).catch((error) => {
    console.error(error)
});

