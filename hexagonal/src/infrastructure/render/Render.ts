import { Task } from "../../domain/entities/Task";
import { GetAllTask } from "../../application/utils/GetAllTask";
import { GetTask } from "../localstore/GetTasks";
import { IRender } from "../../domain/interfaces/IRender";

export class Render implements IRender  {

    render(): void {
        const
            insTasks = new GetAllTask(new GetTask),
            alltask = insTasks.getAllTasks(),
            tableTask = document.querySelector('#table-list-task tbody');

        if (alltask.length > 0 && tableTask) {
            let tbodyContent = '';
            (alltask).map((element) => {
                tbodyContent += this.generateHtml(element);
            })
            tableTask.innerHTML = tbodyContent;
        }
    }

    private generateHtml(obj: Task): string {
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