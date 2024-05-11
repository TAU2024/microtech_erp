import { AuthData } from "../../data/auth_data";
import { LoginPage } from "../pages/loginPage"

describe("InputAllCorrectDataThenNavigate",()=>{
it("En",()=>{
    LoginPage.visit();
    LoginPage.inputUserName(AuthData.mail);
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.clickLoginButton("Login");
})
})