import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import FeedbackPage from '../pageobjects/FeedbackPage'

import Navbar from '../pageobjects/Components/Navbar'


describe('LoginTest', () => {
    it('Should not login with invalid username and password', async () => {
       await HomePage.visit()

       await Navbar.clickOnSignIn()

       await LoginPage.assertLoginPageIsVisible()
       await LoginPage.login('invalid-username', 'invalid-password')
       await LoginPage.asserLoginPageErrorMessage()

       //await browser.pause(4000)
       await LoginPage.waiForSeconds(3)

    })
})

describe("Feedback Test", () => {
    it("Should submit the feedback form", async()=>{
        await HomePage.visit()
        await HomePage.clickOnFeedbackLink()
        await FeedbackPage.submitFeedback("name", "test@email.com", "subject", "message")
        //await browser.pause(4000)
        await FeedbackPage.waiForSeconds(4)

        await FeedbackPage.assertFeedbackConfirmation()
    })
})