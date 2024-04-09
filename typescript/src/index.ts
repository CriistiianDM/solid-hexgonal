import AddEvent from "./application/controllers/controller";
import { 
    HandlerAddTask,
    HandlerSubmit,
    RenderTableTask
} 
from "./application/controllers/controller";


const renderTable = new RenderTableTask();

const addTask = new AddEvent({
    eventName: "#add-task",
    eventType: "click",
    handleFunc: (e) => {
        const handler = new HandlerAddTask();
        e.currentTarget.value = "#form-container";
        handler.execute(e);
    }
});

const initForm = new AddEvent({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: (e) => {
        e.preventDefault();
        e.currentTarget.value = "#form-container";
        const handler = new HandlerSubmit();
        handler.execute(e);
    }
});

/**
 * Execute Events
*/
addTask.listener();
initForm.listener();
renderTable.render();