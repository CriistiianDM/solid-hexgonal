import AbsRender from "../../domain/entities/absRender";
import { ITaskData } from "../../domain/types/taskData";
import LocalstoreData from "../repositories/localstore";

/**
 * Render table of lst
*/
export default class RenderTableTask extends AbsRender {

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

    public generateStruct(obj: ITaskData): string {
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