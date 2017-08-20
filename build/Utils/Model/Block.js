'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// end of imports
var Block = (function () {
    function Block(obj) {
        if (obj === void 0) { obj = {}; }
        var _a = obj.contentList, contentList = _a === void 0 ? null : _a, _b = obj.linkSet, linkSet = _b === void 0 ? null : _b;
        this.contentList = contentList;
        this.linkSet = linkSet;
    }
    Block.prototype.getPlainText = function () {
        this._plainText = this._plainText || this.constructPlainText();
    };
    Block.prototype.constructPlainText = function () {
        var str = "";
        if (this.contentList) {
            this.contentList.forEach(function (ctl) { str += ctl.data; });
        }
        return str;
    };
    return Block;
}());
exports.Block = Block;
