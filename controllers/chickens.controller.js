import { ChickensServices } from '../services/chickens.services.js';


export class ChickensController {
    static getChickens = (req, res) => {
        console.log('ChickensController : getChickens()');

        const result = ChickensServices.getChickens();
        res.status(200).json(result);

    };

}