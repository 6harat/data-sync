'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
// end of imports
var Device = (function () {
    function Device(obj) {
        if (obj === void 0) { obj = {}; }
        var _a = obj.id, id = _a === void 0 ? null : _a, _b = obj.name, name = _b === void 0 ? "" : _b, _c = obj.type, type = _c === void 0 ? "" : _c;
        this.id = id || uuid_1.v4();
        this.name = name;
        this.type = type;
    }
    return Device;
}());
exports.Device = Device;
