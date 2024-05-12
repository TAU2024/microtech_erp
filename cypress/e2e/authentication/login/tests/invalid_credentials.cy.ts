import { AuthData } from "../../data/auth_data";
import { LoginPage } from "../pages/loginPage";

describe("InvalidCredentials", () => {
  it("EntersWrongPassword", () => {
    LoginPage.visit();
    // LoginPage.inputEmail(AuthData.mail);
    LoginPage.inputUserName(AuthData.tempMail);
    // Wrong Password
    LoginPage.inputPassword("AsXC*5497");
    LoginPage.clickLoginButton("Login");
    cy.get('div[data-valmsg-summary="true"]').should("be.visible");
  });
  it("MissingPassword", () => {
    LoginPage.visit();
    // LoginPage.inputEmail(AuthData.mail);
    LoginPage.inputUserName(AuthData.tempMail);
    LoginPage.clickLoginButton("Login");
    cy.get('div[data-valmsg-summary="true"]').should("be.visible");
    cy.get('li').contains(/The Password Field Is Required./i);
  });
  it("EntersWrongUserName", () => {
    LoginPage.visit();
    // LoginPage.inputEmail(AuthData.mail);
    LoginPage.inputUserName("testtest@test.ccc");
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.clickLoginButton("Login");
    cy.get('div[data-valmsg-summary="true"]').should("be.visible");
  });
  it("MissingUserName", () => {
    LoginPage.visit();
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.clickLoginButton("Login");
    cy.get('div[data-valmsg-summary="true"]').should("be.visible");
    cy.get('li').contains(/The Username Field Is Required./i);
  });
});
