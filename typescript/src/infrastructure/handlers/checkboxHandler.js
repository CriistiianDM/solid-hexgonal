"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var absHandlerEvent_1 = require("../../domain/entities/absHandlerEvent");
var evCheckbox_1 = require("../events/evCheckbox");
/**
 * Remove task list
*/
var CheckboxHandler = /** @class */ (function (_super) {
    __extends(CheckboxHandler, _super);
    function CheckboxHandler(obj) {
        var _this = _super.call(this) || this;
        _this.insLocalstore = obj.insLocalstore;
        _this.insRender = obj.insRender;
        return _this;
    }
    CheckboxHandler.prototype.execute = function (e) {
        var checkbox = e.currentTarget, div = checkbox.parentElement, tag = div.getAttribute('tag');
        this.insLocalstore.removeTask(parseInt(tag));
        this.insRender.render();
        evCheckbox_1.initCheckbox.listener();
    };
    return CheckboxHandler;
}(absHandlerEvent_1.default));
exports.default = CheckboxHandler;
