import * as LoginPage from "../pages/login.page";

describe('Notarize Signer Login Page', () => {
  checkLoginBasics();

  checkPageLinks();

  // checkLoginInput();
  
  // checkLoginFunction();

  
});

function checkLoginBasics(){
  it('should open the login page', () => {
    LoginPage.open();
  });

  it('should have the correct title', () => {
    LoginPage.verifyLoginTitle();
  });
}

function checkPageLinks(){
  //CHECK ALL LINKS ON PAGE
  //Home button (image)
  it('should have a button linking to the home page', () => {
    LoginPage.verifyHomeBtn();
  });
  //Sign Up
  it('should have a link to the sign up page', () =>{
    LoginPage.verifySignUpLink();
  });
  //Sign in With Google
  it('should have a working google login option link', () =>{
    LoginPage.verifyGoogleSignIn();
  });
  //? help button
  it('should have a Notarize help button', () => {
    LoginPage.verifyNotarizeHelpBtn();
  });
}

function checkLoginInput(){
  it('should not display a warning message before typing in email input', () => {
    LoginPage.noEmailWarn();
  });
  // it('should display a warning indicating an invalid email address accordingly', () =>{
  //   //this should only be the case if a complete email was previously entered, then invalidated
  //   //only occurs after clicking outside text box
  //   LoginPage.inavalidEmailWarn();
  // });
  it('should display a warning indicating an need for email address accordingly', () =>{
    LoginPage.requiredEmailWarn();
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
  it('should advance to the password page when correct email credentials are provided', () =>{
    LoginPage.validEmailContinue();
  });
}

function checkPasswordInput(){
  // CHECK PASSWORD PAGE
}