import AddEvent from "../handlers/addEvent";
import RenderTableTask  from "../handlers/renderTableTask";
import HandlerSubmit from "../handlers/handlerSubmit";
import LocalstorePostData from "../repositories/localstore/localstorePostData";
import LocalstoreIndex from "../repositories/localstore/localstoreIndex";
import LocalstoreGetData from "../repositories/localstore/localstoreGetData";

// add event lstener to form
export const initForm = new AddEvent({
    eventName: "#form-new-task",
    eventType: "submit",
    handleFunc: (e) => {
        e.preventDefault();
        const
            localstoreGetdata = new LocalstoreGetData(), 
            handler = new HandlerSubmit({
                insRender: new RenderTableTask(localstoreGetdata),
                idTask: new LocalstoreIndex(),
                localstore: new LocalstorePostData()
            });
        handler.execute(e);
    }
});