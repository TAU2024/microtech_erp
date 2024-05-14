import { AuthData } from "../../../../authentication/data/auth_data";
import { LoginPage } from "../../../../authentication/login/pages/loginPage";
import { MySubscriptionsPage } from "../pages/my-subscriptions_page";
var domainSpace = "aqw123";
describe("", () => {
  before("login to the ERP", () => {
    LoginPage.visit();
    LoginPage.inputUserName(AuthData.tempMail);
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.clickLoginButton("Login");
    cy.wait(1000);
    // validateLogin();
  });
  beforeEach(() => {
    MySubscriptionsPage.clickAddDomainSpaceBtn();
  });
  it("Verify Adding Subdomain", () => {
    var count = 1;
    const gridSelector = "div.card-container.grid";
    const itemSelector = "div.card.col-12.md:col-5";
    cy.getInitialCardCount(gridSelector, itemSelector).then(
      (initialCount: number) => {
        // Add a new card (simulate the action to add a card)
        MySubscriptionsPage.inputeCount(count);
        MySubscriptionsPage.inputeYourDomainSpace(domainSpace);
        MySubscriptionsPage.clickAddToCartButton();
        cy.wait(1000);
        // Get updated card count
        cy.getUpdatedCardCount(gridSelector, itemSelector).then(
          (updatedCount: number) => {
            // Assert the count increased by 1
            expect(updatedCount).to.equal(initialCount + 1);
          }
        );
        MySubscriptionsPage.validateAddedSubdomain(domainSpace);
      }
    );
  });

  it("Verify That The System Correctly Calculate The Price Monthly and Yearly", function () {
    var count = 1;
    MySubscriptionsPage.inputeCount(count);
    MySubscriptionsPage.validateMonthlyCount(count);
    MySubscriptionsPage.clickYearly();
    MySubscriptionsPage.validateYearlyCount(count);
  });

  it("Verify That The Count Can't be Greater Than 12 or Less Than 1", function () {
    var count = 13;
    MySubscriptionsPage.verifyValidSubDomainCount(count);
    count = 0;
    MySubscriptionsPage.verifyValidSubDomainCount(count);
  });

  it("Verify That The System Can't Accept The Existing Domain Space Name", function () {
    var duplicatedDomainSpace = "test";
    MySubscriptionsPage.inputeYourDomainSpace(duplicatedDomainSpace);
    MySubscriptionsPage.validateDublicatedDomainSpace();
    var availableDomainSpace = "faker";
    MySubscriptionsPage.inputeYourDomainSpace(availableDomainSpace);
    MySubscriptionsPage.validateAvailableDomainSpace();
  });

  it("Verify That The Saved Data is Stored and Displayed Successfully", function () {});
  it("Verify That form validate all the required components before submitting", function () {
    MySubscriptionsPage.inputeCount(null);
    MySubscriptionsPage.inputeYourDomainSpace(null);
    MySubscriptionsPage.clickAddToCartButton();
    cy.wait(1000);
    MySubscriptionsPage.validateRequiredComponents(2);
    MySubscriptionsPage.inputeCount(3);
    MySubscriptionsPage.inputeYourDomainSpace(null);
    MySubscriptionsPage.clickAddToCartButton();
    cy.wait(1000);
    MySubscriptionsPage.validateRequiredComponents(1);
    MySubscriptionsPage.inputeCount(null);
    MySubscriptionsPage.inputeYourDomainSpace("reqreq");
    MySubscriptionsPage.clickAddToCartButton();
    cy.wait(1000);
    MySubscriptionsPage.validateRequiredComponents(1);
  });
  it("Verify that the pop ups and alerts is displaying in the front of the screen", () => {
    var count = 0;
    MySubscriptionsPage.inputeCount(count);
  });
});
