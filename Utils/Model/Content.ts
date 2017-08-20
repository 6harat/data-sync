'use strict'

import { LOGGER as logger } from '../Logger'
import { VALIDATOR as validator } from '../Validator'
import { Metadata } from './Metadata';
// end of imports

export class Content {

    public data ?: string;
    public metadataSet ?: Set<Metadata>;

    constructor(obj : Content = {} as Content) {
        this.data = obj && obj.data;
        this.metadataSet = obj && obj.metadataSet;
    }
}