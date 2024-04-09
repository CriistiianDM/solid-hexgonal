import { addTask } from "./infrastructure/events/evAddTask";
import { initForm } from "./infrastructure/events/evInitForm";
import RenderTableTask from "./infrastructure/handlers/renderTableTask";
import { initCheckbox } from "./infrastructure/events/evCheckbox";
const renderTable = new RenderTableTask();

/**
 * Execute Events
*/
addTask.listener();
initForm.listener();
renderTable.render();
initCheckbox.listener();