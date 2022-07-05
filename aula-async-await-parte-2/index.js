import fetch from 'node-fetch';

async function main() {
    console.time('promise');
    const promise1 = fetch('https://api.github.com/users/rprrafa');
    const promise2 = fetch('https://api.github.com/users/gabriel-custard');
    const promise3 = fetch('https://api.github.com/users/jorgefelipecunha');
    const promises = await Promise.all([promise1, promise2, promise3]);
    const githubRafa = await promises[0].json();
    const githubGabriel = await promises[1].json();
    console.log(`ID Rafa: ${githubRafa.id}`);
    console.log(`ID Gabriel: ${githubGabriel.id}`);
    console.timeEnd('promise');
}

main();