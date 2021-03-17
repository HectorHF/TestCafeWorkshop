import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import { CREDENTIALS } from '../data/Constants'
import { LOGIN_ERROR_MESSAGES } from '../data/Constants'

fixture('Login Feature Testing')
    .page('https://www.saucedemo.com/')

CREDENTIALS.VALID_USERS.USERNAMES.forEach(username => {
    test('Login with a valid user: ' + username, async t => {
        await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
        await t.expect(ProductPage.productLabel.exists).ok()
        await t.expect(ProductPage.productLabel.innerText).eql('Products')
    })
})

let i = 0
CREDENTIALS.INVALID_USERS.USERNAMES.forEach(username => {
    CREDENTIALS.INVALID_USERS.PASSWORDS.forEach(password => {
        test('Login with an invalid user. Username: ' + username + ', password: ' + password, async t => {
            await LoginPage.submitLoginForm(username, password)
            await t.expect(LoginPage.errorMessage.exists).ok()
            await t.expect(LoginPage.errorMessage.innerText).eql(LOGIN_ERROR_MESSAGES.ERROR_MESSAGES[i])
            i++
        })
    })
})