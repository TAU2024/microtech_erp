import { AuthData } from '../../data/auth_data';
import { LoginPage } from "../pages/loginPage";



describe("Verify The Happy Scenario on the Login page", () => {
  it("En", () => {
    LoginPage.visit();
    LoginPage.getPageHeader("Login");
    LoginPage.getPageHeaderPara("Sign Up A new Account for the first time");
    LoginPage.getPageSecHeader();
    LoginPage.checkLogoImg(AuthData.logoImg);
    // LoginPage.checkEmailLabel('Email');
    // LoginPage.inputEmail(mail);
    LoginPage.checkUserNameLabel("Username");
    LoginPage.inputUserName(AuthData.mail);
    LoginPage.checkPasswordLabel("Password");
    LoginPage.inputPassword(AuthData.pass);
    LoginPage.checkUserForgetPasswordLink("Forgot password ?");
    LoginPage.checkDoNotHaveAccountLink("Don't have an account?");
    LoginPage.checkLangButton();
    LoginPage.clickLoginButton("Login");
  }),
    it("Ar", () => {
      LoginPage.visit();
      LoginPage.clickLangButton();
      LoginPage.getPageHeader("تسجيل الدخول");
      LoginPage.getPageHeaderPara("قم بتسجيل حساب جديد لأول مرة");
      LoginPage.getPageSecHeader();
      LoginPage.checkLogoImg(AuthData.logoImg);
    // LoginPage.checkEmailLabel('Email');
    // LoginPage.inputEmail(mail);
    LoginPage.checkUserNameLabel("اسم المستخدم");
    LoginPage.inputUserName(AuthData.mail);
      LoginPage.checkPasswordLabel("كلمة المرور");
      LoginPage.inputPassword(AuthData.pass);
      LoginPage.checkUserForgetPasswordLink("هل نسيت كلمة السر ?");
      LoginPage.checkDoNotHaveAccountLink("ليس لديك حساب؟");
      LoginPage.clickLoginButton("تسجيل الدخول");
    });
});
