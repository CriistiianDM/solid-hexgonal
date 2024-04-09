"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./application/controllers/controller");
var addTask = new controller_1.default({
    eventName: "#add-task",
    eventType: "click",
    handleFunc: function () {
        alert("Im Best!!!");
    }
});
var initForm = new controller_1.default({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: function (e) {
        console.log("aaaaaaaa");
        e.preventDefault();
        alert("This Form");
    }
});
/**
 * Execute Events
*/
addTask.listener();
initForm.listener();
