import { logger } from '../utils/logger.js';

export const chickenAgeMiddleware = (req, res, next) => {
    logger.info('chickenAgeMiddleware invoked');

    const age = req.body?.age;

    if(age === undefined || age === null) {
        logger.warn('chickenAgeMiddleware : no age property, calling next()');
        next();
        return;
    }

    // if (!req.body.age) {
    //     logger.warn('chickenAgeMiddleware : age property not found, calling next()');
    //     next();
    //     return;
    // }

    
    logger.info(`chickenAgeMiddleware : req.body.age ${age}`);

    //Validation
    if (typeof age !== 'number') {
        res.status(400).json({ 
            error: 'age property must be a number' 
        });
        
    }

    



    if (age < 1) { 
        req.body.ageDescription = 'chick';
    } else if (age >= 1 && age < 3) {
        req.body.ageDescription = 'teen';
    } else if (age >= 3 && age < 4) {
        req.body.ageDescription = 'adult';
    } else if (age >= 4) {
        req.body.ageDescription = 'old';
    } 

    
    logger.info(`chickenAgeMiddleware : labeled chicken with age ${age} as  ageDescription ${req.body.ageDescription}`);

    next();
    return;

   
};