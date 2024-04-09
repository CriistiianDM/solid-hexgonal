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
var config_1 = require("../../config/config");
var evCheckbox_1 = require("../events/evCheckbox");
/**
 * Create task
*/
var HandlerSubmit = /** @class */ (function (_super) {
    __extends(HandlerSubmit, _super);
    function HandlerSubmit(obj) {
        var _this = _super.call(this) || this;
        _this.insRender = obj.insRender;
        _this.idTask = obj.idTask;
        _this.localstore = obj.localstore;
        return _this;
    }
    HandlerSubmit.prototype.execute = function (e) {
        var form = e.currentTarget, data = this.generateDataSend(form);
        this.localstore.setData(data);
        alert("Succes New Task");
        this.insRender.render();
        evCheckbox_1.initCheckbox.listener();
    };
    HandlerSubmit.prototype.generateDataSend = function (form) {
        var conf = config_1.default['formNewTask'], title = form.querySelector(conf["input-1"]).value, desc = form.querySelector(conf["input-2"]).value, type = parseInt(form.querySelector(conf["select-1"]).value, 10);
        return {
            id: this.idTask.getIndex(),
            title: title,
            desc: desc,
            type: type
        };
    };
    return HandlerSubmit;
}(absHandlerEvent_1.default));
exports.default = HandlerSubmit;
