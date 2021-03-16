import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Overview Feature Testing')
    .page('https://www.saucedemo.com/')

test('Final order items', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    let i = 0
    let numOfElements = Math.floor(Math.random() * 6)   // Number of elements in the Product Page
    let itemNamesCartPage = new Array()
    for(i = 0; i < numOfElements; i++) {
        ProductPage.addItemToCart(i)
    }
    await t.click(ProductPage.shoppingCartLink)
    i = 0
    for(i = 0; i < numOfElements; i++) {
        itemNamesCartPage[i] = await CartPage.getItemName(i)
    }

    await t
        .click(CartPage.checkoutButton)

    await CheckoutPage.fillUserInformation('John', 'Doe', '12345')

    for(i = 0; i < numOfElements; i++) {
        await t.expect(itemNamesCartPage[i]).eql(await OverviewPage.getItemName(i))
    }
})