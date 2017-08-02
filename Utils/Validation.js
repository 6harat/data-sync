'use strict'

var Block = require('./Block.js');
// end of require

module.exports = {
    ifEmpty: (value) => {
        return (value == undefined || value == null);
    },
    ifBlock: (value) => {
        return (value instanceof Block);
    },
    ifNumber: (value) => {
        return (typeof value === 'number');
    },
    ifString: (value) => {
        return (typeof value === 'string');
    },
    ifEmptyString: (value) => {
        return module.exports.ifEmpty(value) || (value == '');
    },
    ifEmptyOrCheck: (value, func) => {
        return module.exports.ifEmpty(value) || func(value);
    },
}