'use strict'

var validator = require('./Validation.js');
// end of require

var Block = function() {
    
    function Block(parent, data, child, confidence) {
        if(validator.ifEmptyOrCheck(parent, validator.ifBlock))
            this._parent = parent;
        if(validator.ifEmptyOrCheck(data, validator.ifString))
            this._data = data;
        if(validator.ifEmptyOrCheck(child, validator.ifBlock))
            this._child = child;
        if(validator.ifEmptyOrCheck(confidence, validator.ifNumber))
            this._confidence = confidence;
    }
    return Block;
}();

Block.prototype = {
    get parent () {
        return this._parent;
    },
    set parent (value) {
        this._parent = value;
    },
    get data () {
        return this._data;
    },
    set data (value) {
        this._data = value;
    },
    get child () {
        return this._child;
    },
    set child (value) {
        this._child = value;
    },
    get confidence () {
        return this._confidence;
    },
    set confidence (value) {
        this._confidence = value;
    }
}

module.exports = Block;