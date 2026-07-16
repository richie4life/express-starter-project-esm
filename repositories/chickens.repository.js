import { Constants } from '../utils/constants.js';
import { database } from '../utils/database.js';
import { logger } from '../utils/logger.js';

export class ChickensRepository {
/**
 * 
 * @returns - An array of chicken objects
 */
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

    /**
     * getChickenById - Fetch one document from 
     * Mongo that has an id property that matches the "id" parameter
     * @param {String} id - the UUID of a particular document
     * @returns {Object | null} - An object representing a single chicken
     */

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

    static createChicken = async (newChicken) => {
        logger.debug('\t\tChickensRepository : createChicken()');

        await database.db.collection(Constants.CHICKENS_COLLECTION).insertOne(newChicken); // This will insert the new chicken into the database and return the result of the insertion
        delete newChicken._id; // This will remove the _id field from the new chicken object that was returned from the database, since we do not want to expose the internal _id field to the client
        return newChicken; // This will return the new chicken that was created
    }

    //replaceChicken

    static replaceChicken = async (id, replaceChicken) => {
        logger.debug('\t\tChickensRepository : replaceChicken()');

        const result = await database.db.collection(Constants.CHICKENS_COLLECTION).replaceOne({ id }, replaceChicken);

        if (result.matchedCount === 0) {
            return false; // This will return false if the chicken with the given id is not found in the database and therefore not replaced
        }

        return replaceChicken;
    }

    //updateChicken

    static updateChicken = async (id, updateChicken) => {
        logger.debug('\t\tChickensRepository : updateChicken()');

        const updateStatement = {
            $set: {}
        }; // This will create an empty update statement object that we will populate with the fields that we want to update

        Object.keys(updateChicken).forEach(key => {
            if (key !== 'id') { // This will ensure that we do not allow the client to update the id of the chicken, since the id is used to identify the chicken in the database and should not be changed
                updateStatement.$set[key] = updateChicken[key]; // This will add the field to the $set object in the update statement, which will tell MongoDB to update that field with the new value
            }
        });

        const result = await database.db.collection(Constants.CHICKENS_COLLECTION).findOneAndUpdate({
            id
        }, updateStatement, { returnDocument: 'after' }); // This will find the chicken with the given id in the database and update it with the fields in the update statement, and return the updated chicken

        if (result) {
            delete result._id; // This will remove the _id field from the updated chicken object that was returned from the database, since we do not want to expose the internal _id field to the client
        }

        return result

        //return result.matchedCount === 0 ? false : true; // This will return true if the chicken was successfully updated, and false if the chicken with the given id is not found in the database and therefore not updated
    }

    //deleteChicken

    static deleteChicken = async (id) => {
        logger.debug('\t\tChickensRepository : deleteChicken()');

        // //TODO: Delete chicken from DB
        // const originalsize = CHICKENS.length; // This will store the original size of the list before deleting the chicken
        // CHICKENS = CHICKENS.filter(chicken => chicken.id !== id); // This will remove the existing chicken with the same id from the list

        // if (CHICKENS.length === originalsize) {
        //     return false; // This will return false if the chicken with the given id is not found in the list and therefore not deleted
        // }

        const result = await database.db.collection(Constants.CHICKENS_COLLECTION).deleteOne({
            id,
        }); // This will delete the chicken with the given id from the database  


        if (result.deletedCount === 0) {
            return false; // This will return false if the chicken with the given id is not found in the database and therefore not deleted
        }
        return true; // This will return true if the chicken was successfully deleted
    }

};