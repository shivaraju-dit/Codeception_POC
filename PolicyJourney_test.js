Feature('PolicyJourney');

Scenario('Buy a Policy', ({ I }) => {
    I.amOnPage('/ux1/review');
    I.see('Protected NCD', '[data-qa="pncd"]');
    I.see('We will protect your 13 years no claims discount', '[data-qa="pncd"]~p');
    I.see('Motor Legal Cover', '[data-qa="lCover"]');
    I.see('Good news Paul!');
    I.see('Benefits included as standard');
    I.see('£200.00', '[data-qa="totalExcess"]');
    I.click('Total Excess');
    I.click('[data-qa="continueBtnDialog"]');
    I.saveScreenshot('ReviewPage.png');
    I.click('div[data-qa="buyBtnFooter"] button');
    // Buy page
    I.see('All payments are safe and secure');
    I.saveScreenshot('BuyPage.png');
    I.click('Pay Now');
    // drive page
    I.see('Welcome on board');
    I.see('PL0321789', '[data-qa="drivePolicyNumber"]');
    I.see('15 December 2020', '[data-qa="drivePolicyStartDate"]');
    I.see('Home Insurance');
    I.saveScreenshot('DrivePage.png');
});
