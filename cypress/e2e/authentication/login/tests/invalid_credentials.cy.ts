import { AuthData } from "../../data/auth_data";
import { LoginPage } from "../pages/loginPage";

describe("InvalidCredentials", () => {
  beforeEach("Visit Login Page", () => {
    LoginPage.visit();
  });
  it("EntersWrongPassword", () => {
    // LoginPage.inputEmail(AuthData.mail);
    LoginPage.inputUserName(AuthData.tempMail);
    // Wrong Password
    LoginPage.inputPassword("AsXC*5497");
    LoginPage.clickLoginButton("Login");
    cy.get('div[data-valmsg-summary="true"]').should("be.visible");
  });
  it("MissingPassword", () => {
    // LoginPage.inputEmail(AuthData.mail);
    LoginPage.inputUserName(AuthData.tempMail);
    LoginPage.clickLoginButton("Login");
    cy.get('div[data-valmsg-summary="true"]').should("be.visible");
    cy.get("li").contains(/The Password Field Is Required./i);
  });
  it("EntersWrongUserName", () => {
    // LoginPage.inputEmail(AuthData.mail);
    LoginPage.inputUserName("testtest@test.ccc");
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.clickLoginButton("Login");
    cy.get('div[data-valmsg-summary="true"]').should("be.visible");
  });
  it("MissingUserName", () => {
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.clickLoginButton("Login");
    cy.get('div[data-valmsg-summary="true"]').should("be.visible");
    cy.get("li").contains(/The Username Field Is Required./i);
  });
});
