'use strict'

import { LOGGER as logger } from './Logger'
import { Block } from './Model/Block';
// end of imports

export namespace VALIDATOR {
    export const IF_EMPTY = (value : any) => {
        return (value == undefined || value == null);
    };
    export const IF_BLOCK = (value : any) => {
        return (value instanceof Block);
    };
    export const IF_NUMBER = (value : any) => {
        return (typeof value === 'number');
    };
    export const IF_STRING = (value : any) => {
        return (typeof value === 'string');
    };
    export const IF_EMPTY_STRING = (value : any) => {
        return (typeof value === 'undefined') || (value === '') || (value === null);
    };
    export const IF_EMPTY_OR_CHECK = (value : any, func : any) => {
        return IF_EMPTY_STRING(value) || func(value);
    };
}