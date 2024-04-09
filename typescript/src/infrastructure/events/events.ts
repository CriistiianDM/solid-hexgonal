import AddEvent from "../../application/controllers/controller";
import LocalstoreData ,{ IndexLocalstore } from "../repositories/localstore";
import { 
    HandlerAddTask,
    HandlerSubmit,
    RenderTableTask,
    CheckboxHandler
} 
from "../../application/controllers/controller";

// instance class render table
export const renderTable = new RenderTableTask();

// add event list a button class
export const addTask = new AddEvent({
    eventName: "#add-task",
    eventType: "click",
    handleFunc: (e) => {
        const handler = new HandlerAddTask();
        e.currentTarget.value = "#form-container";
        handler.execute(e);
    }
});

// add event lstener to form
export const initForm = new AddEvent({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: (e) => {
        e.preventDefault();
        const handler = new HandlerSubmit({
            insRender: new RenderTableTask(),
            idTask: new IndexLocalstore(),
            localstore: new LocalstoreData()
        });
        handler.execute(e);
    }
});

// add event lstener to form
export const initCheckbox = new AddEvent({
    eventName: "#table-list-task tbody input[type='checkbox']",
    eventType: "change",
    handleFunc: (e) => {
        const handler = new CheckboxHandler({
            insLocalstore: new LocalstoreData(),
            insRender: new RenderTableTask()
        });
        handler.execute(e);
    }
});
