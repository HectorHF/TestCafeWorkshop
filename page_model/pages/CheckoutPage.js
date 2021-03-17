import { Selector, t } from 'testcafe';

class CheckoutPage {
    constructor() {
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.continueButton = Selector('.cart_button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async fillUserInformation(firstName, lastName, postalCode) {
        if(firstName != '')
            await t.typeText(this.firstNameField, firstName)
        if(lastName != '')
            await t.typeText(this.lastNameField, lastName)
        if(postalCode != '')
            await t.typeText(this.postalCodeField, postalCode)
        await t.click(this.continueButton)
    }
}

export default new CheckoutPage();