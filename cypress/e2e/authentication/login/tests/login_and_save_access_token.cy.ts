// login.spec.ts

import { AuthData } from "../../data/auth_data";
import { LoginPage } from "../pages/loginPage";

describe("Login", () => {
  it("should login successfully and store access token in local storage", () => {
    LoginPage.visit(); // Visit the login page

    // Perform login actions, for example, filling out username and password fields and submitting the form
    LoginPage.inputUserName(AuthData.tempMail);
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.clickLoginButton("Login");

    // Wait for login to complete and the token to be returned
    cy.wait(1000); // Adjust the wait time as necessary

    cy.window().then((win) => {
      const storedLoginResponse = win.localStorage.getItem("loginResponse");
      const loginResponse = JSON.parse(
        storedLoginResponse || ""
      ) as LoginResponse;
      cy.log("login Response accessToken:");
      cy.log(loginResponse.accessToken);
      console.log("*****loginResponse --- " + loginResponse);
      console.log(
        "*****loginResponse.accessToken --- " + loginResponse.accessToken
      );
    });
  });
});
