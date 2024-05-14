/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// cypress/support/commands.ts
// cypress/support/commands.ts

// commands.ts

declare namespace Cypress {
  interface Chainable<Subject> {
    getInitialCardCount(
      gridSelector: string,
      itemSelector: string
    ): Chainable<any>;
  }
}

Cypress.Commands.add(
  "getInitialCardCount",
  (gridSelector: string, itemSelector: string) => {
    cy.get(gridSelector)
      .find(itemSelector)
      .its("length")
      .then((initialCount) => {
        cy.wrap(initialCount).as("initialCardCount");
      });
  }
);

declare namespace Cypress {
  interface Chainable<Subject> {
    getUpdatedCardCount(
      gridSelector: string,
      itemSelector: string
    ): Chainable<any>;
  }
}
Cypress.Commands.add(
  "getUpdatedCardCount",
  (gridSelector: string, itemSelector: string) => {
    cy.get(gridSelector)
      .find(itemSelector)
      .its("length")
      .then((updatedCount) => {
        cy.wrap(updatedCount).as("updatedCardCount");
      });
  }
);

// cypress/support/index.d.ts
declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to retrieve login response from local storage.
     * Usage: cy.getLoginResponse()
     */
    getLoginResponse: () => Chainable<LoginResponse | null>;
  }
}

// types.d.ts
interface LoginResponse {
  accessToken: string;
  // other properties of your login response if any
}

Cypress.Commands.add("getLoginResponse", () => {
  cy.window().then((win) => {
    const storedLoginResponse = win.localStorage.getItem("loginResponse");
    // Use type assertion to assert that storedLoginResponse is a string
    const loginResponse: LoginResponse | null = JSON.parse(
      storedLoginResponse as string
    );
    return loginResponse;
  });
});

declare namespace Cypress {
  interface Chainable<Subject> {
    checkImageVisibilityBySrc(imgSrc: string): Chainable<any>;
  }
}

Cypress.Commands.add("checkImageVisibilityBySrc", (imgSrc) => {
  cy.get(`img[src='${imgSrc}']`).should("be.visible");
});
