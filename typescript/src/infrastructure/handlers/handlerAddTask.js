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
/**
 *  Add Task
*/
var HandlerAddTask = /** @class */ (function (_super) {
    __extends(HandlerAddTask, _super);
    function HandlerAddTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandlerAddTask.prototype.execute = function (e) {
        var target = e.currentTarget, hiddenElement = document.querySelector(target.value);
        if (hiddenElement && hiddenElement.classList.contains("display-none")) {
            hiddenElement.classList.remove("display-none");
        }
        else {
            hiddenElement.classList.add("display-none");
        }
    };
    return HandlerAddTask;
}(absHandlerEvent_1.default));
exports.default = HandlerAddTask;
