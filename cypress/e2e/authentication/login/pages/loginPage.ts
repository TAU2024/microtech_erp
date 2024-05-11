export class LoginPage {
  static visit() {
    cy.visit("https://intmicrotec.neat-url.com:2010/Account/Login");
  }
  static getPageHeader(head: string) {
    cy.get("h4").contains(head);
  }
  static getPageHeaderPara(headerPar: string) {
    cy.get("p").contains(headerPar);
  }
  static getPageSecHeader() {
    cy.get("h3").contains("Hello!").contains("Welcome");
  }

  static checkLogoImg(img: string) {
    cy.checkImageVisibilityBySrc(img);
  }

  // Will BE Replaced by Email
  static checkUserNameLabel(userLabel: string) {
    cy.get("label").contains(userLabel);
  }
  // Will BE Replaced by Email
  static inputUserName(userName: string) {
    cy.get("#Username").clear().type(userName).should("have.value", userName);
  }

  static checkEmailLabel(emailLabel: string) {
    cy.get("label").contains(emailLabel);
  }

  static inputEmail(mail: string) {
    cy.get("#email").clear().type(mail).should("have.value", mail);
  }

  static checkPasswordLabel(passLabel: string) {
    cy.get("label").contains(passLabel);
  }

  static inputPassword(pass: string) {
    cy.get("#Password").clear().type(pass).should("have.value", pass);
  }

  static checkUserForgetPasswordLink(forgetPass: string) {
    cy.get("a")
      .contains(forgetPass)
      .should("have.attr", "href")
      .and("include", "/Account/ForgotPassword");
  }

  static checkDoNotHaveAccountLink(str: string) {
    cy.get("p.register-account").contains(str);
  }

  static checkLangButton() {
    cy.get("a.lang-btn").should("be.visible");
  }

  static checkLoginButton(loginStr: string) {
    cy.get(".custom-btn")
      .contains(loginStr)
      .should("be.visible")
      .should("be.enabled");
  }
  static clickLoginButton(loginStr: string) {
    cy.get(".custom-btn").contains(loginStr).click();
  }
}
