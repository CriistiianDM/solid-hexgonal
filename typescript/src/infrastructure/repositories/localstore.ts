// import AbsLocalstore from "../../domain/entities/absLocalstore";
import AbsLocalstoreIndex from "../../domain/entities/absLocalstoreIndex";
import { ITaskData } from "../../domain/types/taskData";

/***
 * Export localstore data 
*/
// export default class LocalstoreData extends AbsLocalstore {

//     public getData(): ITaskData[] {
//         this.haveLocalstore();
//         return JSON.parse(localStorage.getItem("task"))
//     }

//     public setData(obj: ITaskData) {
//         const allTask = this.getData();
//         allTask.push(obj)
//         localStorage.setItem("task", JSON.stringify(allTask));
//     }

//     public removeTask(task: number) {
//         let data = this.getData();
//         if (data.length > 0) {
//             data = data.filter(( taskItem ) => {
//                 return taskItem.id !== task
//             })
//             localStorage.setItem("task", JSON.stringify(data));
//         }
//     }   

//     private haveLocalstore() {
//         if (!localStorage.getItem("task")) {
//             localStorage.setItem("task", JSON.stringify([]));
//         }
//     }
// }

