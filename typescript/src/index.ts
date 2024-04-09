import {
    addTask,
    initForm,
    renderTable,
    initCheckbox
} from "./infrastructure/events/events"

/**
 * Execute Events
*/
addTask.listener();
initForm.listener();
renderTable.render();
initCheckbox.listener();