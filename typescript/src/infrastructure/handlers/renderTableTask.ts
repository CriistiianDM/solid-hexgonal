import AbsRender from "../../domain/entities/absRender";
import { ITaskData } from "../../domain/types/taskData";
import LocalstoreGetData from "../repositories/localstore/localstoreGetData";
import { LocalstoreGet } from "../../domain/types/localstoreGet";
/**
 * Render table of lst
*/
export default class RenderTableTask extends AbsRender {
    instLocalstoreGet: LocalstoreGet;

    constructor(instLocalstoreGet: LocalstoreGet) {
        super();
        this.instLocalstoreGet = instLocalstoreGet;
    }

    public render(): void {
        const
            dataPrint = this.instLocalstoreGet.getData(),
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