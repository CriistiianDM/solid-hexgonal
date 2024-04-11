import { InsertTask } from "../../application/utils/InsertTask";
import { AddTask }  from "../../infrastructure/localstore/AddTask";
import { GenerateIndex } from "../../application/utils/GenerateIndex";
import { GetIndex } from "../../infrastructure/localstore/GetIndex";
import { SetIndex } from "../../infrastructure/localstore/SetIndex";
import { IncrementIndex } from "../../application/utils/IncrementIndex";
import { ISubmitForm } from "../../domain/interfaces/ISubmitForm";

/***
 * Event Submit
*/
export class SubmitForm implements ISubmitForm {
    listener(): void {
        let formSubmit: NodeListOf<Element> = document.querySelectorAll("#form-new-task");

        if (formSubmit) {
            formSubmit.forEach((event) => {
                event.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const 
                        target = e.target as HTMLFormElement,
                        pushTask = new InsertTask(new AddTask()),
                        getIndex = new GenerateIndex(new GetIndex()),
                        insIncreament = new IncrementIndex(new SetIndex());

                    pushTask.uploadTask({
                        id: getIndex.getIndexLastTask(),
                        title: target["title-task"].value,
                        desc: "",
                        type: 1
                    })
                    insIncreament.incrementIndex();
                })
            })
        }
    }
}