import AddEvent from "./application/controllers/controller";
import { 
    HandlerAddTask,
    HandlerSubmit
} 
from "./application/controllers/controller";

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
        const handler = new HandlerAddTask();
        handler.execute(e);
    }
});


/**
 * Execute Events
*/
addTask.listener();
initForm.listener();