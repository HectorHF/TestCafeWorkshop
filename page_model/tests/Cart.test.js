import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Shopping Cart Feature Testing')
    .page('https://www.saucedemo.com/')

    test('Navigate to the shopping cart', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

        await t
            .click(ProductPage.shoppingCartLink)

        await t.expect(CartPage.subheader.exists).ok()
        await t.expect(CartPage.subheader.innerText).eql('Your Cart')
    })

    test('Add a single item to the shopping cart', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        let itemPos = Math.floor(Math.random() * 6)   // Number of elements in the Product Page
        await ProductPage.addItemToCart(itemPos)
        const itemNameProductPage = await ProductPage.getItemName(itemPos)
        await t.click(ProductPage.shoppingCartLink)
        await t.expect(CartPage.cartItemLabel.exists).ok()
        await t.expect(CartPage.inventoryItemName.innerText).eql(itemNameProductPage)
    })

    // Perfeccionar para hacer aleatoria la selección

    test('Add multiple items to the shopping cart', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        let i = 0
        let numOfElements = Math.floor(Math.random() * 6)   // Number of elements in the Product Page
        let itemNamesProductPage = new Array()
        for(i = 0; i < numOfElements; i++) {
            ProductPage.addItemToCart(i)
            itemNamesProductPage[i] = await ProductPage.getItemName(i)
        }
        await t.click(ProductPage.shoppingCartLink)
        await t.expect(CartPage.cartItemLabel.exists).ok()
        i = 0
        for(i = 0; i < numOfElements; i++) {
            await t.expect(itemNamesProductPage[i]).eql(await CartPage.getItemName(i))
        }
    })