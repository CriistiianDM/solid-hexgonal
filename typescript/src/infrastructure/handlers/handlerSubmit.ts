import AbsHandlerEvent from "../../domain/entities/absHandlerEvent";
import IRenderTable from "../../domain/interfaces/renderTable";
import ILocalstoreIndex from "../../domain/interfaces/localsotreIndex";
import ILocalstore from "../../domain/interfaces/localstoreData";
import config from "../../config/config";
import ITaskData from "../../domain/interfaces/taskData";
import { initCheckbox } from "../events/evCheckbox";

/**
 * Create task 
*/
export default class HandlerSubmit extends AbsHandlerEvent {
    insRender: IRenderTable;
    idTask: ILocalstoreIndex;
    localstore: ILocalstore;

    constructor(obj: {
        insRender: IRenderTable,
        idTask: ILocalstoreIndex,
        localstore: ILocalstore
    }) {
        super();
        this.insRender = obj.insRender;
        this.idTask = obj.idTask;
        this.localstore = obj.localstore;
    }

    public execute<T extends Event>(e: T): void {
        const 
            form = e.currentTarget as HTMLFormElement,
            data = this.generateDataSend(form);

            this.localstore.setData(data);
            alert("Succes New Task");
            this.insRender.render();
            initCheckbox.listener();
    }

    private generateDataSend(form: HTMLFormElement): ITaskData {
        const 
            conf = config['formNewTask'],
            title = (form.querySelector(conf["input-1"]) as HTMLInputElement).value,
            desc = (form.querySelector(conf["input-2"]) as HTMLInputElement).value,
            type = parseInt((form.querySelector(conf["select-1"]) as HTMLSelectElement).value, 10);
    
        return {
            id: this.idTask.getIndex(),
            title,
            desc,
            type
        };
    }
}