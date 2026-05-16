let CHICKENS = [
    {
        id: '1',
        name: 'Mack',
        breed: 'White Leghorn',
        weight: 1.5
    },
    {
        id: '2',
        name: 'EVOO',  
        breed: 'RHode Island Red',
        weight: 1.75,
    },
    {
        id: '3',
        name: 'Mango',  
        breed: 'Speckled Sussex',
        weight: 2.2,
    },
    {
        id: '4',
        name: 'Bagel',  
        breed: 'Black Star',
        weight: 2.6,
    },
];

export class ChickensRepository {
    static getChickens = () => {
        console.log('\t\tChickensRepository : getChickens()');
        return CHICKENS;
    }

    //getChickenById

    static getChickenById = (id) => {
        console.log(`\t\tChickensRepository : getChickenById(${id})`);

        return CHICKENS.find(chicken => chicken.id === id);
    }

    //createChicken

    static createChicken = (newChicken) => {
        console.log('\t\tChickensRepository : createChicken()');

        CHICKENS.push(newChicken);
        return newChicken;
    }

    //replaceChicken

    static replaceChicken = (id, replaceChicken) => {
        console.log('\t\tChickensRepository : replaceChicken()');

        //TODO: Replace dhicken in DB
        CHICKENS = CHICKENS.filter(chicken => chicken.id !== id); // This will remove the existing chicken with the same id from the list
        CHICKENS.push(replaceChicken); // This will add the updated chicken to the list
        return replaceChicken;
    }

    //updateChicken

    //deleteChicken

}