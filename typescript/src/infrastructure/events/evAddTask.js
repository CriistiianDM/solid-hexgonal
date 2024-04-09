"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = void 0;
var addEvent_1 = require("../handlers/addEvent");
var handlerAddTask_1 = require("../handlers/handlerAddTask");
// add event list a button class
exports.addTask = new addEvent_1.default({
    eventName: "#add-task",
    eventType: "click",
    handleFunc: function (e) {
        var handler = new handlerAddTask_1.default();
        e.currentTarget.value = "#form-container";
        handler.execute(e);
    }
});
