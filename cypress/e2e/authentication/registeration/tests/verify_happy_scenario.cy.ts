import { AuthData } from "../../data/auth_data";
import { RegisterationPage } from "../pages/registerPage";

describe("Verify Happy Scenario Registeration", () => {
  beforeEach("visit", () => {
    RegisterationPage.visit();
  }),
    it("VerifyHappyScenarioRegisterationTestAr", () => {
      RegisterationPage.clickRegisterationButton("سجل الان");
      implemntNormalRegSteps();
      validateRegisteration(
        "تم ارسال ايميل التاكيد",
        "برجاء مراجعة بريدك الالكترونى"
      );
    });
  it("VerifyHappyScenarioRegisterationTestEN", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.clickRegisterationButton("Register Now");
    implemntNormalRegSteps();
    validateRegisteration(/Verification Email Sent/i, /Check Your Email/i);
  });
});
function implemntNormalRegSteps() {
  RegisterationPage.typeFullName(AuthData.fullName);
  RegisterationPage.inputEmail(AuthData.tempMail);
  RegisterationPage.clickDropDownCountryList();
  RegisterationPage.inputCountry(AuthData.country);
  RegisterationPage.inputPassword(AuthData.pass);
  RegisterationPage.inputConfirmPassword(AuthData.pass);
  RegisterationPage.inputPhoneNumber(AuthData.phone);
  RegisterationPage.checkCountryCode(AuthData.code);
  RegisterationPage.confirmCheckBox();
}

function validateRegisteration(headerStr: any, paraString: any) {
  cy.get("h4").contains(headerStr);
  cy.get("p").contains(paraString);
  cy.get("p.m-0").should("contain.text", AuthData.tempMail);
}
