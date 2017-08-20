'use strict'

import { LOGGER as logger } from '../Logger'
import { VALIDATOR as validator } from '../Validator'
import { Block } from './Block';
import { Device } from './Device';
// end of imports

abstract class _Link {
    public block : Block;
    public counter ?: number;
    public sourceSet ?: Set<Device>;
}

export class Link {

    public block : Block;
    public counter ?: number;
    public sourceSet ?: Set<Device>;

    constructor(obj : _Link = {} as Link) {
        this.block = obj && obj.block != null && obj.block || new Block();
        this.counter = obj && obj.counter || 1;
    }

    confidence(): number {
        var num = this.counter || 0;
        return (1 - (1/(1 + num)));
    }

}