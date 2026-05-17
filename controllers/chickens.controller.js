import { ChickensServices } from '../services/chickens.services.js';
import { logger } from '../utils/logger.js';


export class ChickensController {
    static getChickens = (req, res) => {
        logger.debug('ChickensController : getChickens()');

        const result = ChickensServices.getChickens();
        res.status(200).json(result);

    };

    //getChickenById

    static getChickenById = (req, res) => {
        const id = req.params.id;
        logger.debug(`HELLO: ChickensController : getChickenById(${id})`);

        const result = ChickensServices.getChickenById(id);
        if (!result) {
            return res.status(404).json({ message: `Chicken with id ${id} not found` });
        }
        res.status(200).json(result);

    };

    //createChicken

    static createChicken = (req, res) => {
        logger.debug('ChickensController : createChicken()');

        const result = ChickensServices.createChicken(req.body);
        res.status(200).json(result);
    };

    //replaceChicken

    static replaceChicken = (req, res) => {
        const id = req.params.id;
        logger.debug(`ChickensController : replaceChicken(${id})`);

        const result = ChickensServices.replaceChicken(id,req.body);
        res.status(200).json(result);
    };

    //updateChicken

    static updateChicken = (req, res) => {
        const id = req.params.id;
        logger.debug(`ChickensController : updateChicken(${id})`);

        const result = ChickensServices.updateChicken(id,req.body);

        if (!result) {
            //return res.status(404).json({ message: `Chicken with id ${id} not found` });
            res.sendStatus(404);
            return;
        }

        res.status(200).json(result);
    };

    //deleteChicken
    static deleteChicken = (req, res) => {
        const id = req.params.id;
        logger.debug(`ChickensController : deleteChicken(${id})`);

        const result = ChickensServices.deleteChicken(id);
        if (!result) {
            //return res.status(404).json({ message: `Chicken with id ${id} not found` });
            res.sendStatus(404);
            return;
        }

        res.sendStatus(200);
    };
};

