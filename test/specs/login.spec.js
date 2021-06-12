import * as LoginPage from "../pages/login.page";

describe('Notarize Signer Login Page', () => {
  it('should open the login page', () => {
    LoginPage.open();
  });
  it('should have the correct title', () => {
    LoginPage.verifyTitle();
  });
  it('should have a button linking to the home page', () => {
    LoginPage.verifyHomeButton();
  });
  it('should not enable continue button for empty email addresses', () => {
    LoginPage.emptyEmailAddr();
  });
  it('should not enable continue button for incomplete email addresses', () => {
    LoginPage.invalidEmailAddr();
  });
  it('should enable continue button with a complete email address', () => {
    LoginPage.validEmailAddr();
  });
});


