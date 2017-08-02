'use strict'

var validator = require('./Validation.js');
var errorCode = require('./ErrorCode.js');

module.exports = {
    calculateConfidence: (value) => {
        if(validator.ifEmpty(value)) value = 0;
        if(validator.ifNumber(value))
            return 1 - (1/(1 + value));
        else
            throw new Error(errorCode.PARAM_NOT_NUM('calculateConfidence'));
    }
}