import { Selector, t } from 'testcafe';

class ProductPage {
    constructor() {
        this.productLabel = Selector('.product_label')
        this.hamburgerIcon = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.shoppingCartLink = Selector('.shopping_cart_link')
        this.addToCartButton = Selector('.btn_inventory').nth(2)
        this.inventoryItemName = Selector('.inventory_item_name').nth(2)
    }

    async addItemToCart(itemPos) {
        const item = Selector('.btn_inventory').nth(itemPos)
        await t
            .click(item)
    }

    async getItemName(itemPos) {
        const itemName = Selector('.inventory_item_name').nth(itemPos)
        return itemName.innerText
    }

    async addItemAndGoToCart() {
        this.addItemToCart(0)
        await t
            .click(this.shoppingCartLink)
    }

    async logout() {
        await t
            .click(this.hamburgerIcon)
            .click(this.logoutLink)
    }
}

export default new ProductPage();