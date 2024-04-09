import AddEvent from "../handlers/addEvent";
import HandlerAddTask  from "../handlers/handlerAddTask";

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