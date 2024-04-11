import { IGetIndex } from "../../domain/interfaces/IGetIndex";
import { IsetIndex } from "../../domain/interfaces/IsetIndex";
import { IGenerateIndex } from "../../domain/interfaces/IGenerateIndex";

/**
 * Class GenerateIndex
*/
export class GenerateIndex implements IGenerateIndex {
    getIndex: IGetIndex;

    constructor(getIndex: IGetIndex) {
        this.getIndex = getIndex
    }

    getIndexLastTask(): number {
        const indexCurrent = this.getIndex.getIndex();
        return indexCurrent;
    }
}