"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evAddTask_1 = require("./infrastructure/events/evAddTask");
var evInitForm_1 = require("./infrastructure/events/evInitForm");
var renderTableTask_1 = require("./infrastructure/handlers/renderTableTask");
var evCheckbox_1 = require("./infrastructure/events/evCheckbox");
var renderTable = new renderTableTask_1.default();
/**
 * Execute Events
*/
evAddTask_1.addTask.listener();
evInitForm_1.initForm.listener();
renderTable.render();
evCheckbox_1.initCheckbox.listener();
