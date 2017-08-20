'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// end of imports
var Link = (function () {
    function Link(obj) {
        if (obj === void 0) { obj = {}; }
        var _a = obj.block, block = _a === void 0 ? null : _a, _b = obj.counter, counter = _b === void 0 ? 1 : _b;
        this.block = block;
        this.counter = counter;
    }
    Link.prototype.confidence = function () {
        var num = this.counter || 0;
        return (1 - (1 / (1 + num)));
    };
    return Link;
}());
exports.Link = Link;
