import fetch from 'node-fetch';

async function main() {
    const user = 'rprrafa';
    const user2 = 'jorgefelipecunha';
    const apiUrl = 'https://api.github.com';
    // fetch(`${apiUrl}/users/${user}`)
    //     .then((response) => {
    //         return response.json();
    //     }).then((user) => {
    //         console.log(user.name);
    //     });
    // const response = await fetch(`${apiUrl}/users/${user}`);
    // const response2 = await fetch(`${apiUrl}/users/${user2}`);
    const promise = fetch(`${apiUrl}/users/${user}`);
    const promise2 = fetch(`${apiUrl}/users/${user2}`);
    const promises = await Promise.all([promise, promise2]);
    const githubUser = await promises[0].json();
    const githubUser2 = await promises[1].json();
    console.log(`Rafa ID: ${githubUser.id}`);
    console.log(`Jorge ID: ${githubUser2.id}`);
}

main();