"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./application/controllers/controller");
var controller_2 = require("./application/controllers/controller");
var addTask = new controller_1.default({
    eventName: "#add-task",
    eventType: "click",
    handleFunc: function (e) {
        var handler = new controller_2.HandlerAddTask();
        e.currentTarget.value = "#form-container";
        handler.execute(e);
    }
});
var initForm = new controller_1.default({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: function (e) {
        e.preventDefault();
        var handler = new controller_2.HandlerAddTask();
        handler.execute(e);
    }
});
/**
 * Execute Events
*/
addTask.listener();
initForm.listener();
