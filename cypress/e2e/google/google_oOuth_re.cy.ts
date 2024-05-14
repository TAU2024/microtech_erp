// cypress/integration/google_oauth.spec.ts

describe('Google OAuth', () => {
    beforeEach(() => {
      // Clear cookies and local storage before each test
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  
    it('Performs Google OAuth flow', () => {
      // Visit Google OAuth consent page
      cy.visit('https://accounts.google.com/o/oauth2/auth', {
        qs: {
          client_id: 'YOUR_CLIENT_ID', // Replace with your actual client ID
          redirect_uri: 'YOUR_REDIRECT_URI', // Replace with your redirect URI
          response_type: 'token',
          scope: 'profile email', // Specify the scopes you need
          access_type: 'offline',
          prompt: 'consent',
        },
      });
  
      // Enter email
      cy.get('input[type="email"]').type('your_username');
  
      // Click "Next" button
      cy.get('#identifierNext').click();
  
      // Enter password
      cy.get('input[type="password"]').type('your_password');
  
      // Click "Next" button
      cy.get('#passwordNext').click();
  
      // Handle consent screen
      cy.get('#submit_approve_access').click();
  
      // Wait for redirection to redirect_uri
      cy.url().should('include', 'YOUR_REDIRECT_URI');
  
      // Extract access token from URL fragment
      cy.url().then((url) => {
        const accessToken = new URLSearchParams(url.split('#')[1]).get('access_token');
  
        // Store access token in JSON file
        cy.writeFile('cypress/fixtures/access_token.json', { accessToken });
      });
    });
  
    it('Checks if user name is displayed', () => {
      // Load access token from JSON file
      cy.fixture('access_token.json').then((accessToken) => {
        // Perform actions that require authorization
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
  