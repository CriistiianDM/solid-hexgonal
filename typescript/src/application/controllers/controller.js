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
exports.CheckboxHandler = exports.RenderTableTask = exports.HandlerSubmit = exports.HandlerAddTask = void 0;
var entities_1 = require("../../domain/entities/entities");
var localstore_1 = require("../../infrastructure/repositories/localstore");
var events_1 = require("../../infrastructure/events/events");
var config_1 = require("../../config/config");
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
}(entities_1.default));
exports.default = AddEvent;
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
}(entities_1.AbsHandlerEvent));
exports.HandlerAddTask = HandlerAddTask;
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
        events_1.initCheckbox.listener();
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
}(entities_1.AbsHandlerEvent));
exports.HandlerSubmit = HandlerSubmit;
/**
 * Render table of lst
*/
var RenderTableTask = /** @class */ (function (_super) {
    __extends(RenderTableTask, _super);
    function RenderTableTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenderTableTask.prototype.render = function () {
        var _this = this;
        var localstore = new localstore_1.default(), dataPrint = localstore.getData(), tableTask = document.querySelector('#table-list-task tbody');
        if (dataPrint.length > 0) {
            var allTask_1 = '';
            tableTask.innerHTML = '';
            (dataPrint).map(function (element) {
                allTask_1 += _this.generateStruct(element);
            });
            tableTask.innerHTML = allTask_1;
        }
        if (dataPrint.length <= 0) {
            tableTask.innerHTML = 'No have task pending';
        }
    };
    RenderTableTask.prototype.generateStruct = function (obj) {
        return "\n        <tr>\n            <td>\n                <div tag=\"".concat(obj.id, "\">\n                    <strong>").concat(obj.title, "</strong>\n                    <span>").concat(obj.desc, "</span>\n                    <input type=\"checkbox\" />\n                </div>\n            </td>\n        </tr>");
    };
    return RenderTableTask;
}(entities_1.AbsRender));
exports.RenderTableTask = RenderTableTask;
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
        events_1.initCheckbox.listener();
    };
    return CheckboxHandler;
}(entities_1.AbsHandlerEvent));
exports.CheckboxHandler = CheckboxHandler;
