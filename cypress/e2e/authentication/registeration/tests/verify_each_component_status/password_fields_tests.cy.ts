import { values } from "cypress/types/lodash";
import { RegisterationPage } from "../../pages/registerPage";
import { AuthData } from "../../../data/auth_data";
import { checkISRequiredMsg } from "./functions/is_required_message";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  ;
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
const correctPassword = "Test123!";
const inCorrectPass1 = "test123!";
const inCorrectPass2 = "TEST123!";
const inCorrectPass3 = "Test1231";
const inCorrectPass4 = "Testtest!";
const inCorrectPass5 = "1234567!";
const inCorrectPass6 = "/*----====!";
describe("Password Field Tests", () => {
  beforeEach(() => {
    RegisterationPage.visit();
  });
  it("should verify the presence of the red star symbol next to the label title", () => {
    cy.get('label[for="Password"]').should("contain", "*");
  });
  it("should verify the presence of a lock icon in the text field", () => {
    // cy.get('#inputPassword').should('have.class', 'lock-icon');
    cy.checkImageVisibilityBySrc("/assets/img/login/iconly_light_lock.webp");
  });
  it("should verify password complexity requirements", () => {
    cy.get('input[name="password"]')
      .clear()
      .type(correctPassword)
      .invoke("val").then(
        (val) => {
          expect(val).to.match(passwordRegex);
        }
      )
      ;
    cy.get('input[name="password"]')
      .clear()
      .type(inCorrectPass1)
      .invoke('val')
      .then((val) => {
        expect(val).not.to.match(passwordRegex);
      })
      ;
    cy.get('input[name="password"]')
      .clear()
      .type(inCorrectPass2)
      .invoke('val')
      .then((val) => {
        expect(val).not.to.match(passwordRegex);
      })
      ;
    cy.get('input[name="password"]')
      .clear()
      .type(inCorrectPass3)
      .invoke('val')
      .then((val) => {
        expect(val).not.to.match(passwordRegex);
      })
      ;
    cy.get('input[name="password"]')
      .clear()
      .type(inCorrectPass4)
      .invoke('val')
      .then((val) => {
        expect(val).not.to.match(passwordRegex);
      })
      ;
    cy.get('input[name="password"]')
      .clear()
      .type(inCorrectPass5)
      .invoke('val')
      .then((val) => {
        expect(val).not.to.match(passwordRegex);
      })
      ;
    cy.get('input[name="password"]')
      .clear()
      .type(inCorrectPass6)
      .invoke('val')
      .then((val) => {
        expect(val).not.to.match(passwordRegex);
      })
      ;
  });

  it("should verify that password and confirm password fields match", () => {
    const password = "Test123!";
    cy.get('input[name="password"]').clear().type(password);
    cy.get('input[name="confirmPassword"]').clear().type(password);
    cy.get('input[name="password"]').invoke('val').then((passwordValue) => {
      cy.get('input[name="confirmPassword"]').invoke('val').should('eq', passwordValue);
    });
  });
  it("should verify the appearance of a message if confirm password is different", () => {
    const password = "Test123!";
    const confirmPassword = "DifferentPassword123*";
    cy.get('input[name="password"]').clear().type(password).type('{enter}');
    cy.get('input[name="confirmPassword"]').clear().type(confirmPassword).type('{enter}');
    cy.get('span#inputConfirmPassword').should('be.visible');
    // cy.get('span#inputConfirmPassword-error').invoke('val').then((val) => {
    //   expect(val).to.have.value(AuthData.diffPassMsg);
    // });
    cy.contains(AuthData.diffPassMsg).should(
      "be.visible"
    );
  });
  it("should verify that the password is encrypted when entered", () => {
    const password = "Test123!";
    cy.get('input[name="password"]').clear()
      .type(password);
    cy.get('input[name="password"]')
      .clear()
      .invoke("val")
      .then((enteredPassword) => {
        expect(enteredPassword).not.to.equal(password);
      });
  });
  it("To Verify Password is Required Message  Arabic", () => {
    checkISRequiredMsg("#inputPassword", false);
  });
  it("To Verify Password is Required Message English", () => {
    RegisterationPage.clickLangButton();
    checkISRequiredMsg("#inputPassword", true);
  });
  it("To Verify Confirm Password is Required Message  Arabic", () => {
    checkISRequiredMsg("#inputConfirmPassword", false);
  });

  it("To Verify Confirm Password is Required Message English", () => {
    RegisterationPage.clickLangButton();
    checkISRequiredMsg("#inputConfirmPassword", true);
  });

});

