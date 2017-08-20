'use strict'

export const LOGGER = require('tracer').colorConsole({
    level: 'all'
});

// testing logger
if (require.main === module) {
    LOGGER.info('printing info');
    LOGGER.debug('printing debug');
    LOGGER.warn('printing warn');
    LOGGER.error('printing error');
}