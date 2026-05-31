import { Constants } from '../utils/constants.js';
import { database } from '../utils/database.js';
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

        return database.db.collection(Constants.CHICKENS_COLLECTION).find(
            {},
            {
                projection: {
                    _id: 0
                }
            }
        ).toArray();
    }

    //getChickenById

    static getChickenById = (id) => {
        logger.debug(`\t\tChickensRepository : getChickenById(${id})`);

        return database.db.collection(Constants.CHICKENS_COLLECTION).findOne(
            { id },
        {
                projection: {
                    _id: 0
                }
            }
        ); // This will find the chicken with the given id from the database and return it
    }

    //createChicken

    static createChicken = async(newChicken) => {
        logger.debug('\t\tChickensRepository : createChicken()');

        await database.db.collection(Constants.CHICKENS_COLLECTION).insertOne(newChicken); // This will insert the new chicken into the database and return the result of the insertion
        delete newChicken._id; // This will remove the _id field from the new chicken object that was returned from the database, since we do not want to expose the internal _id field to the client
        return newChicken; // This will return the new chicken that was created
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
