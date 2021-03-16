import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Checkout Feature Testing')
    .page('https://www.saucedemo.com/')

    test('Continue with missing mail information', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await ProductPage.addItemAndGoToCart()

        await t
            .click(CartPage.checkoutButton)
            .click(CheckoutPage.continueButton)

        await t.expect(CheckoutPage.errorMessage.exists).ok()
    })

    test('Fill user´s information', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await ProductPage.addItemAndGoToCart()

        await t
            .click(CartPage.checkoutButton)

        await CheckoutPage.fillUserInformation('John', 'Doe', '12345')
        await t.expect(OverviewPage.subheader.innerText).eql('Checkout: Overview')
    })