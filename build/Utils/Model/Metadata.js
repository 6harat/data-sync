'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// end of imports
var Metadata = (function () {
    function Metadata(obj) {
        if (obj === void 0) { obj = {}; }
        var _a = obj.fileName, fileName = _a === void 0 ? null : _a, _b = obj.device, device = _b === void 0 ? null : _b, _c = obj.style, style = _c === void 0 ? null : _c;
        this.fileName = fileName;
        this.device = device;
        this.style = style;
    }
    return Metadata;
}());
exports.Metadata = Metadata;
