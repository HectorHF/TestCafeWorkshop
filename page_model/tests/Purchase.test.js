import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'
import { CREDENTIALS } from '../data/Constants'
import { CHECKOUTINFO } from '../data/Constants'

fixture('Purchase Feature Testing')
    .page('https://www.saucedemo.com/')

    CREDENTIALS.VALID_USERS.USERNAMES.forEach(username => {
        test('Complete a purchase. Username: ' + username, async t => {
            await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
            await ProductPage.addItemAndGoToCart()
    
            await t
                .click(CartPage.checkoutButton)
    
            await CheckoutPage.fillUserInformation(CHECKOUTINFO.VALID_CHECKOUTINFO.FIRSTNAME, CHECKOUTINFO.VALID_CHECKOUTINFO.LASTNAME, CHECKOUTINFO.VALID_CHECKOUTINFO.POSTALCODE)
    
            await t
                .click(OverviewPage.finishButton)
    
            await t.expect(FinishPage.subheader.exists).ok()
            await t.expect(FinishPage.subheader.innerText).eql('Finish')
            await t.expect(FinishPage.completeHeader.exists).ok()
            await t.expect(FinishPage.completeHeader.innerText).eql('THANK YOU FOR YOUR ORDER')
        })
    })

    