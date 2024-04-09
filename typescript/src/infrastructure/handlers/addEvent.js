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
var absController_1 = require("../../domain/entities/absController");
/**
 * Add event
*/
var AddEvent = /** @class */ (function (_super) {
    __extends(AddEvent, _super);
    function AddEvent(obj) {
        var _this = _super.call(this) || this;
        _this.eventType = obj.eventType;
        _this.eventName = obj.eventName;
        _this.handleFunc = obj.handleFunc;
        return _this;
    }
    AddEvent.prototype.listener = function () {
        var _this = this;
        var nodesListener = document.querySelectorAll(this.eventName);
        /**
         * CLick - Add Task
        */
        if (nodesListener) {
            nodesListener.forEach(function (event) {
                event.addEventListener(_this.eventType, function (e) {
                    _this.handleFunc(e);
                });
            });
        }
    };
    return AddEvent;
}(absController_1.default));
exports.default = AddEvent;
