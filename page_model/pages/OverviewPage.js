import { Selector } from 'testcafe';

class OverviewPage {
    constructor() {
        this.subheader = Selector('.subheader')
        this.finishButton = Selector('.cart_button')
    }

    async getItemName(itemPos) {
        const item = Selector('.inventory_item_name').nth(itemPos)
        return item.innerText
    }
}

export default new OverviewPage();