import { AuthData } from "../../../data/auth_data";
import { RegisterationPage } from "../../pages/registerPage";
beforeEach("", () => {
  RegisterationPage.visit();
});





describe("Verify Password component Status on the Registerion page", () => {
  it("should verify the presence of the red star symbol next to the label title", () => {
    cy.get('label[for="Password"]').should("contain", "*");
  });
  it("To Verify Password is Required Message  Arabic", () => {
    cy.get("#inputPassword").clear().type('{enter}');
    cy.get("span").contains('هذا الحقل مطلوب').should('be.visible');
    cy.get("#inputPassword").clear();
  });
  it("To Verify Password is Required Message English", () => {
    RegisterationPage.clickLangButton();
    cy.get("#inputPassword").clear().type('{enter}');
    cy.get("span").contains('Field is required').should('be.visible');
    cy.get("#inputPassword").clear();
  });
  it("To Verify Confirm Password is Required Message  Arabic", () => {
    cy.get("#inputConfirmPassword").clear().type('{enter}');
    cy.get("span").contains('هذا الحقل مطلوب').should('be.visible');
    cy.get("#inputConfirmPassword").clear();
  });
  it("To Verify Confirm Password is Required Message English", () => {
    RegisterationPage.clickLangButton();
    cy.get("#inputConfirmPassword").clear().type('{enter}');
    cy.get("span").contains('Field is required').should('be.visible');
    cy.get("#inputConfirmPassword").clear();
  });
  it("En", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkPasswordLabel("Password");
    RegisterationPage.inputPassword(AuthData.pass);
    RegisterationPage.checkConfirmPasswordLabel("Confirm Password");
    RegisterationPage.inputConfirmPassword(AuthData.pass);
  }),
    it("Ar", () => {
      RegisterationPage.checkPasswordLabel("الرقم السرى");
      RegisterationPage.inputPassword(AuthData.pass);
      RegisterationPage.checkConfirmPasswordLabel("اعادة كتابة الرقم السرى");
      RegisterationPage.inputConfirmPassword(AuthData.pass);
    });
});





