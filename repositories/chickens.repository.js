import { logger } from '../utils/logger.js';

let CHICKENS = [
    {
        id: '1',
        name: 'Mack',
        breed: 'White Leghorn',
        weight: 1.5,
        age: 1,
    },
    {
        id: '2',
        name: 'EVOO',  
        breed: 'RHode Island Red',
        weight: 1.75,
        age: 2,
    },
    {
        id: '3',
        name: 'Mango',  
        breed: 'Speckled Sussex',
        weight: 2.2,
        age: 3,
    },
    {
        id: '4',
        name: 'Bagel',  
        breed: 'Black Star',
        weight: 2.6,
        age: 4,
    },
];

export class ChickensRepository {
    static getChickens = () => {
        logger.debug('\t\tChickensRepository : getChickens()');
        return CHICKENS;
    }

    //getChickenById

    static getChickenById = (id) => {
        logger.debug(`\t\tChickensRepository : getChickenById(${id})`);

        return CHICKENS.find(chicken => chicken.id === id);
    }

    //createChicken

    static createChicken = (newChicken) => {
        logger.debug('\t\tChickensRepository : createChicken()');

        CHICKENS.push(newChicken);
        return newChicken;
    }

    //replaceChicken

    static replaceChicken = (id, replaceChicken) => {
        logger.debug('\t\tChickensRepository : replaceChicken()');

        //TODO: Replace dhicken in DB
        CHICKENS = CHICKENS.filter(chicken => chicken.id !== id); // This will remove the existing chicken with the same id from the list
        CHICKENS.push(replaceChicken); // This will add the updated chicken to the list
        return replaceChicken;
    }

    //updateChicken

    static updateChicken = (id, updateChicken) => {
        logger.debug('\t\tChickensRepository : updateChicken()');

        //TODO: Replace dhicken in DB
        
        const chicken = CHICKENS.find(chicken => chicken.id === id); // This will find the existing chicken with the same id from the list

        if (!chicken) {
            return null; // This will return null if the chicken with the given id is not found in the list
        }

        Object.keys(updateChicken).forEach(key => {
            chicken[key] = updateChicken[key]; // This will update the existing chicken with the new values from the updateChicken object
        });


        return chicken; // This will return the updated chicken
    }

    //deleteChicken

    static deleteChicken = (id) => {
        logger.debug('\t\tChickensRepository : deleteChicken()');

        //TODO: Delete chicken from DB
        const originalsize = CHICKENS.length; // This will store the original size of the list before deleting the chicken
        CHICKENS = CHICKENS.filter(chicken => chicken.id !== id); // This will remove the existing chicken with the same id from the list

        if (CHICKENS.length === originalsize) {
            return false; // This will return false if the chicken with the given id is not found in the list and therefore not deleted
        }
        return true; // This will return true if the chicken was successfully deleted
    }

}
        