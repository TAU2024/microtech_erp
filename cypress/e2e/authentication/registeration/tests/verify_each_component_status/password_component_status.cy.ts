import { AuthData } from "../../../data/auth_data";
import { RegisterationPage } from "../../pages/registerPage";
import { checkISRequiredMsg } from "./functions/is_required_message";
beforeEach("", () => {
  RegisterationPage.visit();
});

describe("Verify Password component Status on the Registerion page", () => {
  it("should verify the presence of the red star symbol next to the label title", () => {
    cy.get('label[for="Password"]').should("contain", "*");
  });
  it("To Verify Password is Required Message  Arabic", () => {
    checkISRequiredMsg("#inputPassword", false);
  });
  it("To Verify Password is Required Message English", () => {
    RegisterationPage.clickLangButton();
    checkISRequiredMsg("#inputPassword", true);
  });
  it("To Verify Confirm Password is Required Message  Arabic", () => {
    checkISRequiredMsg("#inputConfirmPassword", false);
  });

  it("To Verify Confirm Password is Required Message English", () => {
    RegisterationPage.clickLangButton();
    checkISRequiredMsg("#inputConfirmPassword", true);
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
