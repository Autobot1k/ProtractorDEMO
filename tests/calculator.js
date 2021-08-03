let homepage = require('../pages/homepage')
describe('Demo calculator tests', function () {
    it('Addition test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber(2)
        homepage.enterSecondNumber(3)
        homepage.clickGo()
        homepage.verifyResult('5')

        browser.sleep(3000);

    });

    it('Subtraction test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber(2)
        homepage.enterSecondNumber(3)
        homepage.clickGo()
        homepage.verifyResult('5')

        browser.sleep(3000);

    });
});