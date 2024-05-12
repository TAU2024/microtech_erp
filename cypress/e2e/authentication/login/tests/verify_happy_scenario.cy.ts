import { AuthData } from "../../data/auth_data";
import { LoginPage } from "../pages/loginPage";

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
    cy.window().then((win) => {
      const storedLoginResponse = win.localStorage.getItem("loginResponse");
      const loginResponse = JSON.parse(
        storedLoginResponse || ""
      ) as LoginResponse;
      const accessToken = loginResponse.accessToken;
      console.log("*****loginResponse.accessToken --- " + accessToken);
    });
    cy.get("span.p-menuitem-text");
    cy.get("div.card_empty_subdomain");
    cy.url().should("include", "bussinessowners");
  }),
    it("Ar", () => {
      LoginPage.clickLangButton();
      // LoginPage.checkEmailLabel('Email');
      // LoginPage.inputEmail(mail);
      LoginPage.inputUserName(AuthData.tempMail);
      LoginPage.inputPassword(AuthData.pass);
      LoginPage.clickLoginButton("تسجيل الدخول");
      cy.wait(1000);
      cy.window().then((win) => {
        const storedLoginResponse = win.localStorage.getItem("loginResponse");
        const loginResponse = JSON.parse(
          storedLoginResponse || ""
        ) as LoginResponse;
        const accessToken = loginResponse.accessToken;
        console.log("*****loginResponse.accessToken --- " + accessToken);
      });
      cy.get("span.p-menuitem-text");
      cy.get("div.card_empty_subdomain");
      cy.url().should("include", "bussinessowners");
    });
});
