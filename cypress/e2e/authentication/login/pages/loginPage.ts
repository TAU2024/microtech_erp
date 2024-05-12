export class LoginPage {
  static visit() {
    cy.visit("https://intmicrotec.neat-url.com:2010/Account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dmicrotecadminfrontend%26redirect_uri%3Dhttps%253A%252F%252Fintmicrotec.neat-url.com%253A2006%252Fbussinessowners%252Flogin-redirect%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520offline_access%2520bo%26nonce%3D7f6a5f6f6da6a950af8fa0bbcafa895fd23eJ3VMf%26state%3D96f33df40e659abb2453283e9acd1dcb53STwWea4%26code_challenge%3DXb2bMVXlbAEjNjv6SVxIV5agaI-Y28rQnK8z2Iz4rvI%26code_challenge_method%3DS256%26lang%3Den&setlang=True");
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
  static clickLangButton() {
    cy.get("a.lang-btn").click();
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
