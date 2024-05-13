import { AuthData } from "../../data/auth_data";
import { LoginPage } from "../pages/loginPage";
import { validateLogin } from "./functions/validateLogin";

describe("Verify The Happy Scenario on the Login page", () => {
  beforeEach("Visit Login Page", () => {
    LoginPage.visit();
  });
  it("En", () => {
    // LoginPage.checkEmailLabel('Email');
    // LoginPage.inputEmail(mail);
    LoginPage.inputUserName(AuthData.tempMail);
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.clickLoginButton("Login");
    cy.wait(1000);
    validateLogin();
  }),
    it("Ar", () => {
      LoginPage.clickLangButton();
      // LoginPage.checkEmailLabel('Email');
      // LoginPage.inputEmail(mail);
      LoginPage.inputUserName(AuthData.tempMail);
      LoginPage.inputPassword(AuthData.pass);
      LoginPage.clickLoginButton("تسجيل الدخول");
      cy.wait(1000);
      validateLogin();
    });
});


