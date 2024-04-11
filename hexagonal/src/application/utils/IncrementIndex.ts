import { IsetIndex } from "../../domain/interfaces/IsetIndex";
import { IncreaseIndex } from "../../domain/interfaces/IncreaseIndex";

/**
 * Class IncrementIndex
*/
export class IncrementIndex implements IncreaseIndex {
    setIndex: IsetIndex;

    constructor(setIndex: IsetIndex) {
        this.setIndex = setIndex;
    }

    /**
     * Set index
    */
    incrementIndex(): void {
        this.setIndex.setIndex();
    }
}