"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCheckbox = exports.initForm = exports.addTask = exports.renderTable = void 0;
var controller_1 = require("../../application/controllers/controller");
var localstore_1 = require("../repositories/localstore");
var controller_2 = require("../../application/controllers/controller");
// instance class render table
exports.renderTable = new controller_2.RenderTableTask();
// add event list a button class
exports.addTask = new controller_1.default({
    eventName: "#add-task",
    eventType: "click",
    handleFunc: function (e) {
        var handler = new controller_2.HandlerAddTask();
        e.currentTarget.value = "#form-container";
        handler.execute(e);
    }
});
// add event lstener to form
exports.initForm = new controller_1.default({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: function (e) {
        e.preventDefault();
        var handler = new controller_2.HandlerSubmit({
            insRender: new controller_2.RenderTableTask(),
            idTask: new localstore_1.IndexLocalstore(),
            localstore: new localstore_1.default()
        });
        handler.execute(e);
    }
});
// add event lstener to form
exports.initCheckbox = new controller_1.default({
    eventName: "#table-list-task tbody input[type='checkbox']",
    eventType: "change",
    handleFunc: function (e) {
        var handler = new controller_2.CheckboxHandler({
            insLocalstore: new localstore_1.default(),
            insRender: new controller_2.RenderTableTask()
        });
        handler.execute(e);
    }
});
