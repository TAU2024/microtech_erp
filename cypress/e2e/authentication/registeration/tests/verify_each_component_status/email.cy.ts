import { AuthData } from "../../../data/auth_data";
import { RegisterationPage } from "../../pages/registerPage";
beforeEach("", () => {
  RegisterationPage.visit();
});



describe("Verify Email component Status on the Registerion page", () => {
  it("should verify the presence of the red star symbol next to the label title", () => {
    cy.get('label[for="Password"]').should("contain", "*");
  });
  it("To Verify Email is Required Message Arabic", () => {
    cy.get("#FullName").clear().type('{enter}');
    cy.get("span").contains('هذا الحقل مطلوب').should('be.visible');
  });
  it("To Verify Email is Required Message English", () => {
    RegisterationPage.clickLangButton();
    cy.get("#FullName").clear().type('{enter}');
    cy.get("span").contains('Field is required').should('be.visible');
  });
  it("checkEmailRegExFormatEn", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkEmailLabel("Email");
    RegisterationPage.inputEmail(AuthData.mail);
  }),
    it("checkEmailRegExFormatAr", () => {
      RegisterationPage.checkEmailLabel("البريد الالكترونى");
      RegisterationPage.inputEmail(AuthData.mail);
    });
  it("checkRegisterationWithUsedEmail", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkEmailLabel("Email");
    RegisterationPage.inputEmail(AuthData.usedMail);
  });
});
