'use strict'

import { LOGGER as logger } from '../Logger'
import { VALIDATOR as validator } from '../Validator'
import { Block } from './Block';
import { Link } from './Link';
// end of imports

interface _DataGrid {
    root : Block;
}

export class DataGrid implements _DataGrid {

    private _root : Block;
    locator = new Map<string,Block>();

    constructor(obj = {} as _DataGrid) {
        this._root = obj && obj.root;
    }

    addBlock(blk : Block | undefined, neu : Block) : Block {
        if(blk) {
            var link = new Link({block:neu});
            blk.addChildLink(link);
        } else {
            this._root = neu;
        }
        return neu;
    }

    get root() {
        return this._root;
    }

    getCompleteGrid() : string {
        return JSON.stringify(this);
    }
}