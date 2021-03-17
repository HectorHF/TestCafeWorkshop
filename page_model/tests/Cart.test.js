import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import { CREDENTIALS } from '../data/Constants'

const totalNumberOfElements = 6

fixture('Shopping Cart Feature Testing')
    .page('https://www.saucedemo.com/')

    CREDENTIALS.VALID_USERS.USERNAMES.forEach(username => {
        test('Navigate to the shopping cart. Username: ' + username, async t => {
            await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
    
            await t
                .click(ProductPage.shoppingCartLink)
    
            await t.expect(CartPage.subheader.exists).ok()
            await t.expect(CartPage.subheader.innerText).eql('Your Cart')
        })
    
        test('Add a single item to the shopping cart. Username: ' + username, async t => {
            await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
            let itemPos = Math.floor(Math.random() * totalNumberOfElements)
            await ProductPage.addItemToCart(itemPos)
            const itemNameProductPage = await ProductPage.getItemName(itemPos)
            await t.click(ProductPage.shoppingCartLink)
            await t.expect(CartPage.cartItemLabel.exists).ok()
            await t.expect(CartPage.inventoryItemName.innerText).eql(itemNameProductPage)
        })
    
        test('Add multiple items to the shopping cart. Username: ' + username, async t => {
            await LoginPage.submitLoginForm(username, CREDENTIALS.VALID_USERS.PASSWORD)
            let i = 0
            let numOfElements = Math.floor(Math.random() * (totalNumberOfElements - 2)) + 2
            let addedItems = new Array(6)
            for(i = 0; i < addedItems.length; i++) {
                addedItems[i] = false
            }
            let itemNamesProductPage = new Array()
            let randomItemPos = Math.floor(Math.random() * totalNumberOfElements)
            for(i = 0; i < numOfElements; i++) {
                while(addedItems[randomItemPos])
                    randomItemPos = Math.floor(Math.random() * totalNumberOfElements)
                addedItems[randomItemPos] = true
                ProductPage.addItemToCart(randomItemPos)
                itemNamesProductPage[i] = await ProductPage.getItemName(randomItemPos)
            }
            await t.click(ProductPage.shoppingCartLink)
            await t.expect(CartPage.cartItemLabel.exists).ok()
            i = 0
            for(i = 0; i < numOfElements; i++) {
                await t.expect(itemNamesProductPage[i]).eql(await CartPage.getItemName(i))
            }
        })
    })

    