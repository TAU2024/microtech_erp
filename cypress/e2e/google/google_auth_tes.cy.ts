// cypress/integration/google_login.spec.ts
const mail ="bensyed096@gmail.com";
const pass = "mAhA1973*";
describe('Google Login', () => {
    beforeEach(() => {
      // Unauthenticate user from Google
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  
    it('Logs in with valid username and password', () => {
      // Visit Google login page
      cy.visit('https://accounts.google.com');
  
      // Fill in username
      cy.get('input[type="email"]').type(mail);
  
      // Click "Next" button
      cy.get('#identifierNext').click();
  cy.wait(1000);
      // Fill in password
      cy.get('input[type="password"]').type(pass);
  
      // Click "Next" button
      cy.get('#passwordNext').click();
  
      // Wait for login to complete
      cy.url().should('include', 'myaccount.google.com');
  
      // Fetch access token
      cy.window().then((win) => {
        const accessToken = win.localStorage.getItem('access_token');
  
        // Store access token in JSON file
        cy.writeFile('cypress/fixtures/access_token.json', { accessToken });
      });
    });
  
    it('Checks if user name is displayed', () => {
      // Load access token from JSON file
      cy.fixture('access_token.json').then((accessToken) => {
        // Perform actions that require authorization
        // For example, visit profile page and check if user name is displayed
        cy.request({
          method: 'GET',
          url: 'https://www.googleapis.com/oauth2/v1/userinfo',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }).then((response) => {
          // Check if user name is displayed
          expect(response.body.name).to.exist;
        });
      });
    });
  });
  