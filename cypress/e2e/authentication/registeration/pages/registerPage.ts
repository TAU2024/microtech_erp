import { AuthData } from "../../data/auth_data";

export class RegisterationPage {
  static visit() {
    cy.visit(AuthData.registerationUrl);
  }
  static clickLangButton() {
    cy.get("a.lang-btn").eq(0).click({ force: true });
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
  static checkFullNameLabel(fullName: string) {
    cy.get("label").contains(fullName);
  }
  static typeFullName(fullName: string) {
    cy.get("#FullName").clear().type(fullName).should("have.value", fullName);
  }
  static checkEmailLabel(label: string) {
    cy.get("label").contains(label);
  }
  static inputEmail(mail: string) {
    cy.get("#email")
      .clear()
      .type(mail)
      .invoke("val")
      .then((text) => {
        expect(text).to.match(AuthData.emailRegex);
      });
  }

  static checkCountryLabel(CountryLabel: string) {
    cy.get("label").contains(CountryLabel).should("be.visible");
  }

  static clickDropDownCountryList() {
    cy.get("#select2-dropDownCountry-container").click();
  }

  static inputCountry(country: String) {
    cy.get("input.select2-search__field")
      .clear()
      .type(country + "{enter}");
  }

  static checkPasswordLabel(passLabel: string) {
    cy.get("label").contains(passLabel);
  }

  static inputPassword(pass: string) {
    cy.get("#inputPassword").clear().type(pass).should("have.value", pass);
  }
  static checkConfirmPasswordLabel(conPassLabel: string) {
    cy.get("label").contains(conPassLabel);
  }
  static inputConfirmPassword(pass: string) {
    cy.get("#inputConfirmPassword")
      .clear()
      .type(pass)
      .should("have.value", pass);
  }

  static checkPhoneLabel(phone: string) {
    cy.get("label").contains(phone);
  }

  static inputPhoneNumber(phone: string) {
    cy.get("#mobileNumber").clear().type(phone).should("have.value", phone);
  }

  static checkCountryCode(code: string) {
    cy.get("span#select2-dropDownMobile-container")
      .should("have.attr", "title")
      .and("include", code);
  }

  static checkAgreeStatementLabel(stri: string) {
    cy.get("label").contains(stri);
  }
  static checkHaveAnAccount(stri: string) {
    cy.get("span").contains(stri);
  }
  static confirmCheckBox() {
    cy.get("input#termsBox.form-check-input").click().should("be.checked");
  }

  static checkSignInButton(label: string) {
    cy.get("a").contains(label);
  }

  static checkRegisterationButton(loginStr: string) {
    cy.get(".custom-btn").contains(loginStr).should("be.visible");
  }
  static clickRegisterationButton(loginStr: string) {
    cy.get(".custom-btn").contains(loginStr).should("be.visible").click();
  }
  static checkVerficationEmailSent(label: string, mail: string) {
    cy.get("h4").contains(label);
    cy.get("p.m-0").should("contain.text", mail);
  }
}
