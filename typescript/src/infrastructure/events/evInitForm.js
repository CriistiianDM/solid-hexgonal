"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initForm = void 0;
var addEvent_1 = require("../handlers/addEvent");
var renderTableTask_1 = require("../handlers/renderTableTask");
var localstore_1 = require("../repositories/localstore");
var handlerSubmit_1 = require("../handlers/handlerSubmit");
// add event lstener to form
exports.initForm = new addEvent_1.default({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: function (e) {
        e.preventDefault();
        var handler = new handlerSubmit_1.default({
            insRender: new renderTableTask_1.default(),
            idTask: new localstore_1.IndexLocalstore(),
            localstore: new localstore_1.default()
        });
        handler.execute(e);
    }
});
