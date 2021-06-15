import * as LoginPage from "../pages/login.page";

describe('Notarize Signer Login Page', () => {
  checkLoginBasics();

  checkLoginPageLinks();

  checkLoginInput();
  
  checkPasswordPageLinks();

  checkPswdInput();

  checkPasswordPageLinks();

  checkForgotPswdInput();

  // checkResizing();
});

function checkLoginBasics(){
  it('should open the login page', () => {
    LoginPage.open();
  });

  it('should have the correct title', () => {
    LoginPage.verifyLoginTitle();
  });
}

function checkLoginPageLinks(){
  //CHECK ALL LINKS ON LOGIN PAGE
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
  it('should display a warning indicating an invalid email address accordingly', () =>{
    LoginPage.inavalidEmailWarn();
  });
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
    LoginPage.validEmailCont();
  });
}

function checkPswdInput(){
  // CHECK PASSWORD PAGE
  it('should have a new password text input ', () =>{
    LoginPage.noPswdWarn();
  });
  it('should not enable the continue button if no password has been entered ', () =>{
    LoginPage.emptyPswd();
  });
  it('should display a warning message if a password has been typed then removed ', () =>{
    LoginPage.emptyPswdWarn();
  });
  it('should not log in when provided an incorrect password ', () =>{
    LoginPage.invalidPswd();
  });
  it('should warn the user when incorrect login information is provided ', () =>{
    LoginPage.inavalidPswdWarn();
  });
  it('should proceed to login if correct login information is provided ', () =>{
    LoginPage.validPswdCont();
  });
  it('should display the entered password when the view password button is clicked ', () =>{
    LoginPage.viewPswdBtn();
  });
  it('should hide the entered password when the view password button is clicked a second time', () =>{
    LoginPage.hidePswdBtn();
  });
}

function checkPasswordPageLinks(){
  it('should prepare to reset password when "forgot password" button is clicked', () =>{
    LoginPage.verifyForgotPswdBtn();
  });
  it('should go back to the login page when the back button is clicked', () =>{
    LoginPage.verifyPswdBackBtn();
  });
}

function checkForgotPswdInput(){
  it('should present an email box for sending password reset instructions', () =>{
    LoginPage.verifyResetEmailBox();
  });
  it('should have an altered submit button indicating the sending of a reset link', () =>{
    LoginPage.verifyResetSubmitBtn();
  });
  it('should have a back button that navigates back to the main login page', () =>{
    LoginPage.verifyResetBackBtn();
  });
}

function checkResizing(){
  /*I was hoping to test the resizing features of the page, but either it's 
  functionality is hidden somewhere that I'm not seeing or it's part of Bootstrap
  or something similar that I am not familar with*/
}