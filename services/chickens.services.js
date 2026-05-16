import { ChickensRepository } from '../repositories/chickens.repository.js';

export class ChickensServices {
    static getChickens = () => {
        console.log('\tChickensServices : getChickens()');
        return ChickensRepository.getChickens();
    }
}