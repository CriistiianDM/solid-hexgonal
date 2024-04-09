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
exports.HandlerSubmit = exports.HandlerAddTask = void 0;
var entities_1 = require("../../domain/entities/entities");
var entities_2 = require("../../domain/entities/entities");
/**
 * Init logit
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
        var click = document.querySelector(this.eventName);
        /**
         * CLick - Add Task
        */
        if (click) {
            click.addEventListener(this.eventType, function (e) {
                _this.handleFunc(e);
            });
        }
    };
    return AddEvent;
}(entities_1.default));
exports.default = AddEvent;
/**
 *
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
    };
    return HandlerAddTask;
}(entities_2.AbsHandlerEvent));
exports.HandlerAddTask = HandlerAddTask;
var HandlerSubmit = /** @class */ (function (_super) {
    __extends(HandlerSubmit, _super);
    function HandlerSubmit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandlerSubmit.prototype.execute = function (e) {
        var form = e.currentTarget;
        // Obtener los valores de los campos del formulario
        var title = form.querySelector('input[name="title-task"]').value;
        var desc = form.querySelector('input[name="desc-task"]').value;
        var type = parseInt(form.querySelector('select[name="type-select"]').value, 10);
        // Crear un objeto con la información del formulario
        var formData = {
            id: Date.now(), // Generar un ID único
            title: title,
            desc: desc,
            type: type
        };
        // Hacer algo con los datos del formulario
        console.log(formData);
    };
    return HandlerSubmit;
}(entities_2.AbsHandlerEvent));
exports.HandlerSubmit = HandlerSubmit;
