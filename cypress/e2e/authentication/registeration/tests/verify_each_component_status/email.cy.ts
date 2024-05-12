import { AuthData } from "../../../data/auth_data";
import { RegisterationPage } from "../../pages/registerPage";
import { checkISRequiredMsg } from "./functions/is_required_message";

describe("Verify Email component Status on the Registerion page", () => {
  beforeEach("Visit Registeration Page", () => {
    RegisterationPage.visit();
  });
  it("should verify the presence of the red star symbol next to the label title", () => {
    cy.get('label[for="Password"]').should("contain", "*");
  });
  it("To Verify Email is Required Message Arabic", () => {
    checkISRequiredMsg("#FullName", false);
  });
  it("To Verify Email is Required Message English", () => {
    RegisterationPage.clickLangButton();
    checkISRequiredMsg("#FullName", true);
  });
  it("checkEmailRegExFormatEn", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkEmailLabel("Email");
    RegisterationPage.inputEmail(AuthData.tempMail);
  }),
    it("checkEmailRegExFormatAr", () => {
      RegisterationPage.checkEmailLabel("البريد الالكترونى");
      RegisterationPage.inputEmail(AuthData.tempMail);
    });
  it("checkRegisterationWithUsedEmail", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkEmailLabel("Email");
    RegisterationPage.inputEmail(AuthData.usedmail1);
  });
});
