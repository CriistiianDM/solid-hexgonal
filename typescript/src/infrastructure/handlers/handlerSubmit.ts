import AbsHandlerEvent from "../../domain/entities/absHandlerEvent";
import { IRenderTable } from "../../domain/types/renderTable";
import { ITaskData } from "../../domain/types/taskData";
import { initCheckbox } from "../events/evCheckbox";
import { LocalstoreIndex } from "../../domain/types/localsotreIndex";
import { LocalstorePost } from "../../domain/types/localstorePost";
import config from "../../config/config";

/**
 * Create task 
*/
export default class HandlerSubmit extends AbsHandlerEvent {
    insRender: IRenderTable;
    idTask: LocalstoreIndex;
    localstore: LocalstorePost;

    constructor(obj: {
        insRender: IRenderTable,
        idTask: LocalstoreIndex,
        localstore: LocalstorePost
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