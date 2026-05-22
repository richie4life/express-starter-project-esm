import { logger } from '../utils/logger.js';

// export const errorHandlerMiddleware = (err, req, res, next) => {
//     logger.error(`errorHandlerMiddleware invoked with error: ${JSON.stringify(err.message)}`);
//     res.status(500).json({ error: 'An Internal Error occured' });
// };