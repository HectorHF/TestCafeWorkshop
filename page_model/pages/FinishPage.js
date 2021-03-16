import { Selector } from 'testcafe';

class FinishPage {
    constructor() {
        this.subheader = Selector('.subheader')
        this.completeHeader = Selector('.complete-header')
    }
}

export default new FinishPage();