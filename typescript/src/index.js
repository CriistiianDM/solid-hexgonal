"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("./infrastructure/events/events");
/**
 * Execute Events
*/
events_1.addTask.listener();
events_1.initForm.listener();
events_1.renderTable.render();
events_1.initCheckbox.listener();
