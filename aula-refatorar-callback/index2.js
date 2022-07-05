import fs from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

let alunos;

readFilePromise('./alunos.json').then((dados) => {
    alunos = JSON.parse(dados);
    console.log('alunos:', alunos);
}).catch((error) => {
    console.error(error);
});

