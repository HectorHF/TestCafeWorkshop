import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS } from '../data/Constants'
import { CHECKOUTINFO } from '../data/Constants'
import { CHECKOUT_ERROR_MESSAGES } from '../data/Constants'

// VALIDAR TODOS LOS MENSAJES DE ERROR DE MAIL

fixture('Checkout Feature Testing')
    .page('https://www.saucedemo.com/')

    CREDENTIALS.VALID_USERS.USERNAMES.forEach(username => {
        let i = 0
        CHECKOUTINFO.INVALID_CHECKOUTINFO.FIRSTNAMES.forEach(firstName => {
            CHECKOUTINFO.INVALID_CHECKOUTINFO.LASTNAMES.forEach(lastName => {
                CHECKOUTINFO.INVALID_CHECKOUTINFO.POSTALCODES.forEach(postalCode => {
                    if(firstName == '' || lastName == '' || postalCode == '') {
                        test('Continue with missing mail information. Username: ' + username + ', First Name: ' + firstName + ', Last Name: ' + lastName + ', Postal Code: ' + postalCode, async t => {
                            await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
                            await ProductPage.addItemAndGoToCart()
                    
                            await t
                                .click(CartPage.checkoutButton)

                            await CheckoutPage.fillUserInformation(firstName, lastName, postalCode)

                            await t
                                .click(CheckoutPage.continueButton)
                    
                            await t.expect(CheckoutPage.errorMessage.exists).ok()
                            await t.expect(CheckoutPage.errorMessage.innerText).eql(CHECKOUT_ERROR_MESSAGES.ERROR_MESSAGES[i])
                            i++
                        })
                    }
                })
            })
        })
    
        test('Fill user´s information. Username: ' + username, async t => {
            await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
            await ProductPage.addItemAndGoToCart()
    
            await t
                .click(CartPage.checkoutButton)
    
            await CheckoutPage.fillUserInformation(CHECKOUTINFO.VALID_CHECKOUTINFO.FIRSTNAME, CHECKOUTINFO.VALID_CHECKOUTINFO.LASTNAME, CHECKOUTINFO.VALID_CHECKOUTINFO.POSTALCODE)
            await t.expect(OverviewPage.subheader.innerText).eql('Checkout: Overview')
        })
    })

    