import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Logout Feature Testing')
    .page('https://www.saucedemo.com/')

test('Logout from product´s page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductPage.logout()
    await t.expect(LoginPage.usernameField.exists).ok()
})