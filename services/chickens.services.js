import { v4 as uuid } from 'uuid';
import { ChickensRepository } from '../repositories/chickens.repository.js';
import { logger } from '../utils/logger.js';

export class ChickensServices {
    static getChickens = () => {
        logger.debug('\tChickensServices : getChickens()');
        return ChickensRepository.getChickens();
    }

    //getChickenById

    static getChickenById = (id) => {
        logger.debug(`\tChickensServices : getChickenById(${id})`);
        return ChickensRepository.getChickenById(id);
    }

    //createChicken

    static createChicken = (newChicken) => {
        logger.debug('\tChickensServices : createChicken()');
        // create a unique id for the new chicken
        newChicken.id = uuid(); // This will generate a unique id for the new chicken using the uuid library
        return ChickensRepository.createChicken(newChicken); // This will call the createChicken method in the repository to add a new chicken to the list

    };

    //replaceChicken

    static replaceChicken = (id, replaceChicken) => {
        logger.debug('\tChickensServices : replaceChicken()');

        //  TODO: Do not let the client update the id of the chicken, we should use the existing id of the chicken to update it
        replaceChicken.id = id; // This will ensure that the id of the chicken is not changed when we replace it
        return ChickensRepository.replaceChicken(id,replaceChicken); // This will call the replaceChicken method in the repository to update the chicken
    };

    //updateChicken

    static updateChicken = (id, updateChicken) => {
        logger.debug('\tChickensServices : updateChicken()');

        //  TODO: Do not let the client update the id of the chicken, we should use the existing id of the chicken to update it
        updateChicken.id = id; // This will ensure that the id of the chicken is not changed when we update it
        return ChickensRepository.updateChicken(id,updateChicken); // This will call the updateChicken method in the repository to update the chicken
    };

    //deleteChicken

    static deleteChicken = (id) => {
        logger.debug('\tChickensServices : deleteChicken()');

        //  TODO: Do not let the client update the id of the chicken, we should use the existing id of the chicken to update it
        return ChickensRepository.deleteChicken(id); // This will call the deleteChicken method in the repository to delete the chicken
    };


    };


