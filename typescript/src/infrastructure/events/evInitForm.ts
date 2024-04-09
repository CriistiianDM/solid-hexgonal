import AddEvent from "../handlers/addEvent";
import RenderTableTask  from "../handlers/renderTableTask";
import LocalstoreData ,{ IndexLocalstore } from "../repositories/localstore";
import HandlerSubmit from "../handlers/handlerSubmit";

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