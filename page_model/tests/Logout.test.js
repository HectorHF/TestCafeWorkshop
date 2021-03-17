import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Logout Feature Testing')
    .page('https://www.saucedemo.com/')

CREDENTIALS.VALID_USERS.USERNAMES.forEach(username => {
    test('Logout from product´s page. Username: ' + username, async t => {
        await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
        await ProductPage.logout()
        await t.expect(LoginPage.usernameField.exists).ok()
    })
})