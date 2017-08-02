'use strict'
const logger = require('tracer').colorConsole({
    level: 'all'
});

// testing logger
if (require.main === module) {
    logger.info('inside index.js');
    logger.debug('this should not get printed');
    logger.warn('this ought to get printed');
    logger.error('this should get printed');
}

module.exports = logger;