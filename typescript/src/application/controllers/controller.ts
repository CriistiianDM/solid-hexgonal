import AbsController from "../../domain/entities/entities";
import IEventController from "../../domain/interfaces/interfaces";
import { AbsHandlerEvent } from "../../domain/entities/entities";

/**
 * Init logit
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
 *   
*/
export class HandlerAddTask extends AbsHandlerEvent {

    public execute<T extends Event>(e: T): void {
        const 
            target = e.currentTarget as HTMLInputElement,
            hiddenElement : Element = document.querySelector(target.value);

        if (hiddenElement && hiddenElement.classList.contains("display-none")) {
            hiddenElement.classList.remove("display-none");
        }
    }
}

export class HandlerSubmit extends AbsHandlerEvent {

    public execute<T extends Event>(e: T): void {
        const form = e.currentTarget as HTMLFormElement;
    
        // Obtener los valores de los campos del formulario
        const title = (form.querySelector('input[name="title-task"]') as HTMLInputElement).value;
        const desc = (form.querySelector('input[name="desc-task"]') as HTMLInputElement).value;
        const type = parseInt((form.querySelector('select[name="type-select"]') as HTMLSelectElement).value, 10);
    
        // Crear un objeto con la información del formulario
        const formData = {
            id: Date.now(), // Generar un ID único
            title,
            desc,
            type
        };
    
        // Hacer algo con los datos del formulario
        console.log(formData);
    }
}