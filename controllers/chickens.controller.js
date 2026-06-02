import { ChickensServices } from '../services/chickens.services.js';
import { logger } from '../utils/logger.js';


export class ChickensController {
    static getChickens = async (req, res, next) => {
        logger.debug('ChickensController : getChickens()');

        const result = await ChickensServices.getChickens();
        res.status(200).json(result);

    };

    

    //getChickenById

    static getChickenById = async(req, res) => {
        const id = req.params.id;
        logger.debug(`HELLO: ChickensController : getChickenById(${id})`);

        const result = await ChickensServices.getChickenById(id);
        if (!result) {
            return res.status(404).json({ message: `Chicken with id ${id} not found` });
        }
        res.status(200).json(result);

    };

    //createChicken

    static createChicken = async(req, res) => {
        logger.debug('ChickensController : createChicken()');

        const result = await ChickensServices.createChicken(req.body);
        res.status(201).json(result);
    };

    //replaceChicken

    static replaceChicken = async(req, res) => {
        const id = req.params.id;
        logger.debug(`ChickensController : replaceChicken(${id})`);

        const result = await ChickensServices.replaceChicken(id,req.body);
        if (!result) {
            //return res.status(404).json({ message: `Chicken with id ${id} not found` });
            res.sendStatus(404);
            return;
        }
        res.status(200).json(result);
    };

    //updateChicken

    static updateChicken = async(req, res) => {
        const id = req.params.id;
        logger.debug(`ChickensController : updateChicken(${id})`);

        const result = await ChickensServices.updateChicken(id,req.body);

        if (!result) {
            //return res.status(404).json({ message: `Chicken with id ${id} not found` });
            res.sendStatus(404);
            return;
        }

        res.status(200).json(result);
    };

    //deleteChicken
    static deleteChicken = async(req, res) => {
        const id = req.params.id;
        logger.debug(`ChickensController : deleteChicken(${id})`);

        const result = await ChickensServices.deleteChicken(id);

        if (!result) {
            //return res.status(404).json({ message: `Chicken with id ${id} not found` });
            res.sendStatus(404);
            return;
        }

        res.sendStatus(204);
    };
};

