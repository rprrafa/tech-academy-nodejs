import { getPeople } from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);
    const starWarsPeopleNames = starWarsPeople
        .map((person) => { 
            const { name, height, gender } = person;
            return { name, height, gender };
        });
    console.log(starWarsPeopleNames);
}

main();
