import { AuthData } from "../../../data/auth_data";
import { RegisterationPage } from "../../pages/registerPage";
beforeEach("", () => {
  RegisterationPage.visit();
});

describe("Verify Full Name component Status on the Registerion page", () => {
  it("should verify the presence of the red star symbol next to the label title", () => {
    cy.get('label[for="Password"]').should("contain", "*");
  });
  it("En", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkFullNameLabel("Full Name");
    RegisterationPage.typeFullName(AuthData.fullNameLower);
    RegisterationPage.typeFullName(AuthData.fullNameUpper);
    RegisterationPage.typeFullName(AuthData.fullNameE100);
  }),
    it.only("Ar", () => {
      RegisterationPage.checkFullNameLabel("الاسم بالكامل");
      RegisterationPage.typeFullName(AuthData.fullNameLower);
      RegisterationPage.typeFullName(AuthData.fullNameUpper);
      RegisterationPage.typeFullName(AuthData.fullNameE100);
    });
});

describe("Verify Email component Status on the Registerion page", () => {
  it("checkEmailRegExFormatEn", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkEmailLabel("Email");
    RegisterationPage.inputEmail(AuthData.mail);
  }),
    it("checkEmailRegExFormatAr", () => {
      RegisterationPage.checkEmailLabel("البريد الالكترونى");
      RegisterationPage.inputEmail(AuthData.mail);
    });
  it("checkRegisterationWithUsedEmail", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkEmailLabel("Email");
    RegisterationPage.inputEmail(AuthData.usedMail);
  });
});

describe("Verify Password component Status on the Registerion page", () => {
  it("En", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkPasswordLabel("Password");
    RegisterationPage.inputPassword(AuthData.pass);
    RegisterationPage.checkConfirmPasswordLabel("Confirm Password");
    RegisterationPage.inputConfirmPassword(AuthData.pass);
  }),
    it("Ar", () => {
      RegisterationPage.checkPasswordLabel("الرقم السرى");
      RegisterationPage.inputPassword(AuthData.pass);
      RegisterationPage.checkConfirmPasswordLabel("اعادة كتابة الرقم السرى");
      RegisterationPage.inputConfirmPassword(AuthData.pass);
    });
});

describe("Verify Phone component Status on the Registerion page", () => {
  it("En", () => {
    RegisterationPage.clickLangButton();
    RegisterationPage.checkPhoneLabel("Phone");
    RegisterationPage.inputPhoneNumber(AuthData.phone);
  }),
    it("Ar", () => {
      RegisterationPage.checkPhoneLabel("الهاتف");
      RegisterationPage.inputPhoneNumber(AuthData.phone);
    });
});

it("CheckCountofAllRequiredComponents", () => {
  cy.get("span").contains("*").should("have.length", 4);
});

describe("Password Field Tests", () => {
  beforeEach(() => {
    // Visit the page or navigate to the appropriate section where the password field is located
    RegisterationPage.visit();
  });
  it("should verify the presence of the red star symbol next to the label title", () => {
    // Assert that the red star symbol is visible next to the label title
    cy.get('label[for="Password"]').should("contain", "*");
  });
  it("should verify the presence of a lock icon in the text field", () => {
    // Assert that the lock icon is visible within the password input field
    // cy.get('#inputPassword').should('have.class', 'lock-icon');
    cy.checkImageVisibilityBySrc("/assets/img/login/iconly_light_lock.webp");
  });
  it("should verify password complexity requirements", () => {
    const correctPassword = "Test123!";
    const inCorrectPass1 = "test123!";
    const inCorrectPass2 = "TEST123!";
    const inCorrectPass3 = "Test1231";
    const inCorrectPass4 = "Testtest!";
    const inCorrectPass5 = "1234567!";
    const inCorrectPass6 = "/*----====!";
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    // Get the password input field and its value
    cy.get('input[name="password"]')
      .invoke("val")
      .then((password) => {
        // Assert that the password matches the regex pattern
        expect(password).to.match(passwordRegex);
        expect(inCorrectPass1).not.to.match(passwordRegex);
        expect(inCorrectPass2).not.to.match(passwordRegex);
        expect(inCorrectPass3).not.to.match(passwordRegex);
        expect(inCorrectPass4).not.to.match(passwordRegex);
        expect(inCorrectPass5).not.to.match(passwordRegex);
        expect(inCorrectPass6).not.to.match(passwordRegex);
      });
  });

  it("should verify that password and confirm password fields match", () => {
    const password = "Test123!";
    // Type the same password into both password and confirm password fields
    // Then Assert that the password and confirm password fields have the same value
    cy.get('input[name="password"]')
      .type(password)
      .its("val")
      .should("equal", password);
    cy.get('input[name="confirm-password"]')
      .type(password)
      .its("val")
      .should("equal", password);
  });
  it("should verify the appearance of a message if confirm password is different", () => {
    const password = "Test123!";
    const confirmPassword = "DifferentPassword";
    // Type different passwords into the password and confirm password fields
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirm-password"]').type(confirmPassword);
    // Assert that a message appears indicating that the passwords don't match
    cy.contains("Password and confirm password aren’t the same").should(
      "be.visible"
    );
  });
  it("should verify that the password is encrypted when entered", () => {
    const password = "Test123!";
    // Type the password into the password input field
    cy.get("#Password").type(password);
    // Assert that the password field's value is not equal to the original password
    cy.get("#Password")
      .invoke("val")
      .then((enteredPassword) => {
        expect(enteredPassword).not.to.equal(password);
      });
  });
});
