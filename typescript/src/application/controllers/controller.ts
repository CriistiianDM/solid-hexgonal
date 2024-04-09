import AbsController, { AbsHandlerEvent , AbsRender } from "../../domain/entities/entities";
import LocalstoreData , { IndexLocalstore } from "../../infrastructure/repositories/localstore";
import { initCheckbox } from "../../infrastructure/events/events";
import IEventController , { ITaskData , ILocalstore , IRenderTable , ILocalstoreIndex } from "../../domain/interfaces/interfaces";
import config from "../../config/config";

/**
 * Add event
*/
export default class AddEvent extends AbsController implements IEventController {
    eventType: string;
    eventName: string;
    handleFunc: Function;

    constructor(obj: {
        eventType: string,
        eventName: string,
        handleFunc: Function
    }) {
        super();
        this.eventType = obj.eventType;
        this.eventName = obj.eventName;
        this.handleFunc = obj.handleFunc;
    }

    public listener() : void {
        let nodesListener : NodeListOf<Element> = document.querySelectorAll(this.eventName);

        /**
         * CLick - Add Task 
        */
        if (nodesListener) {

            nodesListener.forEach((event) => {
                event.addEventListener(this.eventType, (e) => {
                    this.handleFunc(e);
                });
            })
        }
    }
}

/**
 *  Add Task
*/
export class HandlerAddTask extends AbsHandlerEvent {

    public execute<T extends Event>(e: T): void {
        const 
            target = e.currentTarget as HTMLInputElement,
            hiddenElement : Element = document.querySelector(target.value);

        if (hiddenElement && hiddenElement.classList.contains("display-none")) {
            hiddenElement.classList.remove("display-none");
        } else {
            hiddenElement.classList.add("display-none");
        }
    }
}

/**
 * Create task 
*/
export class HandlerSubmit extends AbsHandlerEvent {
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

/**
 * Render table of lst
*/
export class RenderTableTask extends AbsRender {

    public render(): void {
        const
            localstore = new LocalstoreData(),
            dataPrint = localstore.getData(),
            tableTask = document.querySelector('#table-list-task tbody');

        if (dataPrint.length > 0) {
            let allTask = '';
            tableTask.innerHTML = '';

            (dataPrint).map((element) => {
                allTask+= this.generateStruct(element);
            })

            tableTask.innerHTML = allTask;
        } 
        
        if (dataPrint.length <= 0) {
            tableTask.innerHTML = 'No have task pending';
        }
    }

    public generateStruct(obj: {
        title: string,
        desc: string,
        id: number,
    }): string {
        return `
        <tr>
            <td>
                <div tag="${obj.id}">
                    <strong>${obj.title}</strong>
                    <span>${obj.desc}</span>
                    <input type="checkbox" />
                </div>
            </td>
        </tr>`
    }
}

/**
 * Remove task list
*/
export class CheckboxHandler extends AbsHandlerEvent {
    insLocalstore: ILocalstore;
    insRender: IRenderTable;

    constructor(obj : {
        insLocalstore: ILocalstore,
        insRender: IRenderTable
    }) {
        super();
        this.insLocalstore = obj.insLocalstore;
        this.insRender = obj.insRender;
    }

    public execute<T extends Event>(e: T): void {
        const 
            checkbox = e.currentTarget as HTMLInputElement,
            div = checkbox.parentElement,
            tag = div.getAttribute('tag');
            
        this.insLocalstore.removeTask(parseInt(tag));
        this.insRender.render();
        initCheckbox.listener();
    }
}