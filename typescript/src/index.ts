import { addTask } from "./infrastructure/events/evAddTask";
import { initForm } from "./infrastructure/events/evInitForm";
import RenderTableTask from "./infrastructure/handlers/renderTableTask";
import { initCheckbox } from "./infrastructure/events/evCheckbox";
import LocalstoreGetData from "./infrastructure/repositories/localstore/localstoreGetData";

const 
    localstoreGetData = new LocalstoreGetData(),
    renderTable = new RenderTableTask(localstoreGetData);

/**
 * Execute Events
*/
addTask.listener();
initForm.listener();
renderTable.render();
initCheckbox.listener();