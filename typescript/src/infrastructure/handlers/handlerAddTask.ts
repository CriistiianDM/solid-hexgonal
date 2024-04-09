import AbsHandlerEvent from "../../domain/entities/absHandlerEvent";

/**
 *  Add Task
*/
export default class HandlerAddTask extends AbsHandlerEvent {

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