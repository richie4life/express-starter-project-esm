import { ChickensServices } from '../services/chickens.services.js';


export class ChickensController {
    static getChickens = (req, res) => {
        console.log('ChickensController : getChickens()');

        const result = ChickensServices.getChickens();
        res.status(200).json(result);

    };

    //getChickenById

    static getChickenById = (req, res) => {
        const id = req.params.id;
        console.log(`HELLO: ChickensController : getChickenById(${id})`);

        const result = ChickensServices.getChickenById(id);
        if (!result) {
            return res.status(404).json({ message: `Chicken with id ${id} not found` });
        }
        res.status(200).json(result);

    };

    //createChicken

    static createChicken = (req, res) => {
        console.log('ChickensController : createChicken()');

        const result = ChickensServices.createChicken(req.body);
        res.status(200).json(result);
    };

    //replaceChicken

    static replaceChicken = (req, res) => {
        const id = req.params.id;
        console.log(`ChickensController : replaceChicken(${id})`);

        const result = ChickensServices.replaceChicken(id,req.body);
        res.status(200).json(result);
    };

    //updateChicken

    //deleteChicken

}