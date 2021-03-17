import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS } from '../data/Constants'
import { CHECKOUTINFO } from '../data/Constants'

const totalNumberOfElements = 6

fixture('Overview Feature Testing')
    .page('https://www.saucedemo.com/')

CREDENTIALS.VALID_USERS.USERNAMES.forEach(username => {
    test('Final order items. Username = ' + username, async t => {
        await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
        let i = 0
        let numOfElements = Math.floor(Math.random() * (totalNumberOfElements - 2)) + 2
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
    
        await CheckoutPage.fillUserInformation(CHECKOUTINFO.VALID_CHECKOUTINFO.FIRSTNAME, CHECKOUTINFO.VALID_CHECKOUTINFO.LASTNAME, CHECKOUTINFO.VALID_CHECKOUTINFO.POSTALCODE)
    
        for(i = 0; i < numOfElements; i++) {
            await t.expect(itemNamesCartPage[i]).eql(await OverviewPage.getItemName(i))
        }
    })
})

