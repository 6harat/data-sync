const EventEmitter = require('events');
import { LOGGER as logger } from '../Utils/Logger'

class AggEmitter extends EventEmitter { }

let emitter = new AggEmitter();


emitter.on('event', () => {
    logger.error(`this should get printed last`)
})


emitter.emit('event');