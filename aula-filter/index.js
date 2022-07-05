import { getPeople } from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);
    const starWarsPeopleFiltered = starWarsPeople
        .filter(person => {
            return person.height < 100;
        })
        .map((person) => {
            return { name: person.name, height: person.height };
        });

    console.log(starWarsPeopleFiltered);
}

main();
