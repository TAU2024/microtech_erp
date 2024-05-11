import { AuthData } from "../../../data/auth_data";
import { RegisterationPage } from "../../pages/registerPage";
beforeEach("", () => {
  RegisterationPage.visit();
});





describe("Verify Password component Status on the Registerion page", () => {
  it("should verify the presence of the red star symbol next to the label title", () => {
    cy.get('label[for="Password"]').should("contain", "*");
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





