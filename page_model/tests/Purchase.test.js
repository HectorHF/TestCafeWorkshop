import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Purchase Feature Testing')
    .page('https://www.saucedemo.com/')

    test('Complete a purchase', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await ProductPage.addItemAndGoToCart()

        await t
            .click(CartPage.checkoutButton)

        await CheckoutPage.fillUserInformation('John', 'Doe', '12345')

        await t
            .click(OverviewPage.finishButton)

        await t.expect(FinishPage.subheader.exists).ok()
        await t.expect(FinishPage.subheader.innerText).eql('Finish')
        await t.expect(FinishPage.completeHeader.exists).ok()
        await t.expect(FinishPage.completeHeader.innerText).eql('THANK YOU FOR YOUR ORDER')
    })