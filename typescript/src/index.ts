import AddEvent from "./application/controllers/controller";
import { 
    HandlerAddTask,
    HandlerSubmit,
    RenderTableTask
} 
from "./application/controllers/controller";

// instance class render table
const renderTable = new RenderTableTask();

// add event list a button class
const addTask = new AddEvent({
    eventName: "#add-task",
    eventType: "click",
    handleFunc: (e) => {
        const handler = new HandlerAddTask();
        e.currentTarget.value = "#form-container";
        handler.execute(e);
    }
});

// add event lstener to form
const initForm = new AddEvent({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: (e) => {
        e.preventDefault();
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