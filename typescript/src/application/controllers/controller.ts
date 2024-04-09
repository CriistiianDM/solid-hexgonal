import IEventController , { ITaskData } from "../../domain/interfaces/interfaces";
import AbsController, { AbsHandlerEvent , AbsRender } from "../../domain/entities/entities";
import LocalstoreData from "../../infrastructure/repositories/localstore";
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
        let click : Element = document.querySelector(this.eventName);

        /**
         * CLick - Add Task 
        */
        if (click) {
            click.addEventListener(this.eventType, (e) => {
                this.handleFunc(e);
            });
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
    insRender: RenderTableTask;

    constructor() {
        super();
        this.insRender= new RenderTableTask();
    }

    public execute<T extends Event>(e: T): void {
        const 
            form = e.currentTarget as HTMLFormElement,
            data = this.generateDataSend(form),
            localstore = new LocalstoreData();

            localstore.setData(data);
            alert("Succes New Task");
            this.insRender.render();
    }

    private generateDataSend(form: HTMLFormElement): ITaskData {
        const 
            conf = config['formNewTask'],
            title = (form.querySelector(conf["input-1"]) as HTMLInputElement).value,
            desc = (form.querySelector(conf["input-2"]) as HTMLInputElement).value,
            type = parseInt((form.querySelector(conf["select-1"]) as HTMLSelectElement).value, 10),
            idTask = new LocalstoreData();
    
        return {
            id: (idTask.getData()).length + 1,
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

            (dataPrint).map( (element) => {
                allTask+= this.generateStruct(element);
            })

            tableTask.innerHTML = allTask;
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