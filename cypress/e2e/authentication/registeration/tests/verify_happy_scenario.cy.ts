import { AuthData } from "../../data/auth_data";
import { RegisterationPage } from "../pages/registerPage";
describe("Verify Happy Scenario Registeration", () => {
  beforeEach("visit",()=>{
    RegisterationPage.visit();
  }),
  it("VerifyHappyScenarioRegisterationTestAr", () => {
    RegisterationPage.clickRegisterationButton("سجل الان");
    implemntNormalRegSteps();
    cy.get("h4").contains("تم ارسال ايميل التاكيد");
    cy.get("p").contains("برجاء مراجعة بريدك الالكترونى");
    cy.get("p.m-0").should("contain.text", AuthData.mail);
  });
  it("VerifyHappyScenarioRegisterationTestEN", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.clickRegisterationButton("Register Now");
    implemntNormalRegSteps();
    cy.get("h4").contains(/Verification Email Sent/i);
    cy.get("p").contains(/Check Your Email/i);
    cy.get("p.m-0").should("contain.text", AuthData.mail);
  });
});
function implemntNormalRegSteps(){
  RegisterationPage.typeFullName(AuthData.fullName);
  RegisterationPage.inputEmail(AuthData.mail);
  RegisterationPage.clickDropDownCountryList();
  RegisterationPage.inputCountry(AuthData.country);
  RegisterationPage.inputPassword(AuthData.pass);
  RegisterationPage.inputConfirmPassword(AuthData.pass);
  RegisterationPage.inputPhoneNumber(AuthData.phone);
  RegisterationPage.checkCountryCode(AuthData.code);
  RegisterationPage.confirmCheckBox();
}

