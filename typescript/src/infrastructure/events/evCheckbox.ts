import AddEvent from "../handlers/addEvent";
import RenderTableTask  from "../handlers/renderTableTask";
import CheckboxHandler from "../handlers/checkboxHandler";
import LocalstoreRemoveData from "../repositories/localstore/localstoreRemoveData";
import LocalstoreGetData from "../repositories/localstore/localstoreGetData";

// add event lstener to form
export const initCheckbox = new AddEvent({
    eventName: "#table-list-task tbody input[type='checkbox']",
    eventType: "change",
    handleFunc: (e) => {
        const 
            localstoreGetdata = new LocalstoreGetData(), 
            handler = new CheckboxHandler({
                insLocalstore: new LocalstoreRemoveData(),
                insRender: new RenderTableTask(localstoreGetdata)
            });
        handler.execute(e);
    }
});
