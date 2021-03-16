import { Selector } from 'testcafe';

class CartPage {
    constructor() {
        this.subheader = Selector('.subheader')
        this.cartItemLabel = Selector('.cart_item_label')
        this.inventoryItemName = Selector('.inventory_item_name')
        this.checkoutButton = Selector('.checkout_button')
    }

    async getItemName(itemPos) {
        const item = Selector('.inventory_item_name').nth(itemPos)
        return item.innerText
    }
}

export default new CartPage();