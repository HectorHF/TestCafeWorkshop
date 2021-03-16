import { Selector, t } from 'testcafe';

class CheckoutPage {
    constructor() {
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.continueButton = Selector('.cart_button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async fillUserInformation(firstName, lastName, postalCodeField) {
        await t
            .typeText(this.firstNameField, firstName)
            .typeText(this.lastNameField, lastName)
            .typeText(this.postalCodeField, postalCodeField)
            .click(this.continueButton)
    }
}

export default new CheckoutPage();