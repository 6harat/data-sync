'use strict'

import { LOGGER as logger } from '../Utils/Logger'

class Getter {

    public _node : string

    constructor() {
        this._node = "bharat"
    }

    get node() : string {
        logger.error('inside getter')
        return this._node;
    }

    roger() {
        logger.info('testing getter')
        logger.debug(this._node)
    }
}

let clz = new Getter()
logger.info(clz.roger())