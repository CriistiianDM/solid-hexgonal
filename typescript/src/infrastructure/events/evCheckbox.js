"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCheckbox = void 0;
var addEvent_1 = require("../handlers/addEvent");
var renderTableTask_1 = require("../handlers/renderTableTask");
var localstore_1 = require("../repositories/localstore");
var checkboxHandler_1 = require("../handlers/checkboxHandler");
// add event lstener to form
exports.initCheckbox = new addEvent_1.default({
    eventName: "#table-list-task tbody input[type='checkbox']",
    eventType: "change",
    handleFunc: function (e) {
        var handler = new checkboxHandler_1.default({
            insLocalstore: new localstore_1.default(),
            insRender: new renderTableTask_1.default()
        });
        handler.execute(e);
    }
});
