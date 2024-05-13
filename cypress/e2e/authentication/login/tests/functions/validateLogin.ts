export function validateLogin() {
    cy.window().then((win) => {
        const storedLoginResponse = win.localStorage.getItem("loginResponse");
        const loginResponse = JSON.parse(
            storedLoginResponse || ""
        ) as LoginResponse;
        const accessToken = loginResponse.accessToken;
        console.log("*****loginResponse.accessToken --- " + accessToken);
    });
    cy.get("span.p-menuitem-text");
    cy.get("div.card_empty_subdomain");
    cy.url().should("include", "bussinessowners");
}