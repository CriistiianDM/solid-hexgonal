import { IGetIndex } from "../../domain/interfaces/IGetIndex";

/**
 *  
*/
export class GetIndex implements IGetIndex {
    getIndex(): number {      
        return this.parseIndex();
    }

    private parseIndex(): number {
        let index = JSON.parse(localStorage.getItem("index") ?? '0');
        return parseInt(index)
    }
}