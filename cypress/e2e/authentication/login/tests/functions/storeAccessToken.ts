export function storeAccessToken() {
    cy.window().then((win) => {
        const storedLoginResponse = win.localStorage.getItem("loginResponse");
        const loginResponse = JSON.parse(
            storedLoginResponse || ""
        ) as LoginResponse;
        const accessToken = loginResponse.accessToken;
        console.log("*****loginResponse.accessToken --- " + accessToken);
    });

}