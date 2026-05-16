import { ChickensRepository } from '../repositories/chickens.repository.js';

export class ChickensServices {
    static getChickens = () => {
        console.log('\tChickensServices : getChickens()');
        return ChickensRepository.getChickens();
    }

    //getChickenById

    static getChickenById = (id) => {
        console.log(`\tChickensServices : getChickenById(${id})`);
        return ChickensRepository.getChickenById(id);
    }

    //createChicken

    //replaceChicken

    //updateChicken

    //deleteChicken
}
