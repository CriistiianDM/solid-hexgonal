import AddEvent from "../handlers/addEvent";
import RenderTableTask  from "../handlers/renderTableTask";
import LocalstoreData from "../repositories/localstore";
import CheckboxHandler from "../handlers/checkboxHandler";

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
