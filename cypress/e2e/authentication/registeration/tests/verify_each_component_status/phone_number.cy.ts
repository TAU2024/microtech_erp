import { AuthData } from "../../../data/auth_data";
import { RegisterationPage } from "../../pages/registerPage";
beforeEach("", () => {
  RegisterationPage.visit();
});



describe("Verify Phone component Status on the Registerion page", () => {
  it("should verify the presence of the red star symbol next to the label title", () => {
    cy.get('label[for="Password"]').should("contain", "*");
  });
  it("En", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkPhoneLabel("Phone");
    RegisterationPage.inputPhoneNumber(AuthData.phone);
  }),
    it("Ar", () => {
      RegisterationPage.checkPhoneLabel("الهاتف");
      RegisterationPage.inputPhoneNumber(AuthData.phone);
    });


    it("To Verify Confirm Password is Required Message  Arabic", () => {
      cy.get("#mobileNumber").clear().type('{enter}');
      cy.get("span").contains('هذا الحقل مطلوب').should('be.visible');
      cy.get("#inputConfirmPassword").clear();
    });
    it("To Verify Confirm Password is Required Message English", () => {
      RegisterationPage.clickLangButton();
      cy.get("#mobileNumber").clear().type('{enter}');
      cy.get("span").contains('Field is required').should('be.visible');
      cy.get("#inputConfirmPassword").clear();
    });
});
