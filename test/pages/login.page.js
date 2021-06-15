export function open() {
  return browser.url("https://app.notarize.com/login");
}

/*Description: Utility page for loading a fresh login page to browser*/
function freshLoginPage(){
  browser.reloadSession();
  browser.url("https://app.notarize.com/login");
}

/*Description: verifies that login url has the correct title
Notes: 
Assumptions: title value is sufficient proof of url leading to correct page*/
export function verifyLoginTitle() {
  freshLoginPage();
  expect(browser).toHaveTitle("Notarize | Login");
}

/*Description: verifies that the login page has a functioning home button
Notes: checks href as well as the url of the page in the window opened by the link
for extra assurance
Assumptions: home button is using a uniqe class identifier*/
export function verifyHomeBtn(){
  freshLoginPage();
  let homeBtn = $("a.YwjbjG5cqFpP4Hlhp4Zjv");
  expect(homeBtn).toHaveHref('https://www.notarize.com/');
  homeBtn.click();
  browser.switchWindow('Legally Notarize Your Documents Online. Anytime. Anywhere.')
  expect(browser).toHaveUrl('https://www.notarize.com/');
}

/*Description: verifies that signup link on login page links to signup page
Notes: double expect statements for extra verification
Assumptions: */
export function verifySignUpLink(){
  freshLoginPage();
  let signUpLink = $("a._291g2aF4hfA0TG1L1tmKiS");
  expect(signUpLink).toExist();
  signUpLink.click();
  expect(browser).toHaveUrl('https://www.notarize.com/pricing');
}

/*Description: verifies that google login link on login page links to google login option
Notes: double expect statements for extra verification
Assumptions: */
export function verifyGoogleSignIn(){
  freshLoginPage();
  let googleBtn = $("#google-signin-button");
  expect(googleBtn).toExist();

  googleBtn.click();
  browser.switchWindow('Sign in - Google Accounts')
  expect(browser).toHaveTitle('Sign in - Google Accounts');
}

/*Description: verifies that Notarize help button is present on login page
Notes: having not worked with iframes before, I'm not entirely sure how to test their 
  functionality. If I have time to return to this I will explore testing this feature
  further
Assumptions: */
export function verifyNotarizeHelpBtn(){
  freshLoginPage();
  let helpBtn = $('iframe, #launcher');
  expect(helpBtn).toExist();
}

/*Description: verifies that no email warning is displayed before entering an email address
Notes: 
Assumptions: */
export function noEmailWarn(){
  freshLoginPage();
  let emailWarning = $("#field-error-message-id-email");
  expect(emailWarning).not.toExist();
}

/*Description: verifies that continue button is not active when no email address is present
Notes: use of all classes to identify button due to lack of unique identifiers
Assumptions: */
export function emptyEmailAddr(){
  freshLoginPage();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  emailBox.clearValue("");
  expect(contBtn).toBeDisabled(); 
}

/*Description: verifies that continue button is not active when incomplete email address 
is present
Notes: use of all classes to identify button due to lack of unique identifiers
Assumptions: */
export function invalidEmailAddr(){
  freshLoginPage();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  emailBox.setValue("phillip.wellheuser");
  expect(contBtn).toBeDisabled(); 
}

/*Description: verifies that a warning appears when trying to proceed without an email
address this seems to only be the case if a complete email was previously entered, 
then invalidated by selecting outside text box
Notes: verifies that warning is not present initially
Assumptions: */
export function inavalidEmailWarn(){
  freshLoginPage();
  let emailWarning = $("#field-error-message-id-email");
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
  expect(emailWarning).not.toExist();
  emailBox.setValue("phillip.wellheuser@gmail.com");
  browser.keys('Tab');
  browser.keys(['ShiftRight', 'Tab']);
  browser.keys("Backspace");
  emailBox.setValue("phillip.wellheuser@gmail.");
  expect(emailWarning).toHaveText('Email Is Required');
}

/*Description: verifies that a warning is displayed if user enters a complete email
address then edits it to be invalid
Notes: verifies warning is not present initially
Assumptions: */
export function requiredEmailWarn(){
  freshLoginPage();
  let emailWarning = $("#field-error-message-id-email");
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
  expect(emailWarning).not.toExist();
  emailBox.setValue("phillip.wellheuser@gmail.com");
  emailBox.setValue("phillip.wellheuser@gmail.");
  expect(emailWarning).toHaveText('Email Is Required');
}

/*Description: verifies that continue button is enabled when valid email address is 
entered
Notes: use of all classes to identify button due to lack of unique identifiers
Assumptions: */
export function validEmailAddr(){
  freshLoginPage();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  emailBox.setValue("phillip.wellheuser@gmail.com");
  expect(contBtn).toBeEnabled(); 
}

/*Description: utility function for reaching the password entry page*/
function goToPswdPg(){
  freshLoginPage();
  
  let emailBox = $("input[data-automation-id='email-field'], #email");
  emailBox.setValue("phillip.wellheuser@gmail.com");

  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  contBtn.click();
}

/*Description: verifies that submission of a valid email address allows progression
to the password page
Notes: 
Assumptions: */
export function validEmailCont(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  expect(pswdBox).toExist();
}

/*Description: verifies that fresh password page should have no warnings present
Notes: 
Assumptions: */
export function noPswdWarn(){
  goToPswdPg();

  let pswdWarn = $("#field-error-message-id-password");
  expect(pswdWarn).not.toExist();

  let contBtnWarn = $("p._2tb3vp5uEt7R6ZimSOFqlx");
  expect(contBtnWarn).not.toExist();
}

/*Description: verifies that continue button is inactive when no password has been
entered
Notes: use of all classes to identify button due to lack of unique identifiers
Assumptions: */
export function emptyPswd(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  pswdBox.clearValue();
  pswdBox.click();
  browser.keys('Tab'); //to change focus
  expect(contBtn).toBeDisabled();
}

/*Description: verifies that a warning is displayed if a password has been typed
and then removed
Notes: 
Assumptions: */
export function emptyPswdWarn(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  pswdBox.clearValue();
  pswdBox.click();
  browser.keys('Tab'); //change focus
  //check the error message below the password input box
  let pswdWarn = $("#field-error-message-id-password");
  expect(pswdWarn).toHaveText('Password Is Required');
}

/*Description: verifies that login is not permitted with incorrect password 
Notes: use of all classes to identify button due to lack of unique identifiers
Assumptions: */
export function invalidPswd(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  pswdBox.setValue("wrongPassword");
  contBtn.click();
  expect(browser).toHaveTitle("Notarize | Login"); //(still)
}

/*Description: verifies that the appropriate warning is displayed when login is not 
permitted due to incorrect password 
Notes: 
Assumptions: */
export function inavalidPswdWarn(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  //use of all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  pswdBox.setValue("wrongPassword");
  contBtn.click();

  //check the warning below the continue button
  let contBtnWarn = $("p._2tb3vp5uEt7R6ZimSOFqlx");
  expect(contBtnWarn).toHaveText('* Email or password invalid');
}

/*Description: verifies that providing correct credentials logs user in
Notes: use of all classes to identify button due to lack of unique identifiers
Assumptions: view-password option is not active*/
export function validPswdCont(){
  // browser.newWindow('https://app.notarize.com/login') //[DELETE ME IF ALL WORKS]
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  pswdBox.setValue("qgC2y4@w7k9HBJ");
  contBtn.click();
  expect(browser).toHaveTitle("Notarize - Prepare Documents");
}

/*Description: verifies that the view password button is present and will display
 the currently entered password text when clicked
Notes: extra expect statements for verifying presence before and after main test
Assumptions: */
export function viewPswdBtn(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  let viewPswdBtn = $("img._3NcpajThdKvpQsajawKS4O");
  pswdBox.setValue("wrongPassword");
  expect(pswdBox).toHaveAttr('type', 'password');
  expect(viewPswdBtn).toHaveAttr('alt', 'Password shown');
  
  viewPswdBtn.click()
  expect(pswdBox).toHaveAttr('type', 'text');
  expect(viewPswdBtn).toHaveAttr('alt', 'Password hidden');
}

/*Description: verifies that the hide password button is present and will display
 the currently entered password text when clicked
Notes: extra expect statements for verifying presence before and after main test
Assumptions: */
export function hidePswdBtn(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  let viewPswdBtn = $("img._3NcpajThdKvpQsajawKS4O");
  pswdBox.setValue("wrongPassword");
  
  viewPswdBtn.click()
  expect(pswdBox).toHaveAttr('type', 'text');
  expect(viewPswdBtn).toHaveAttr('alt', 'Password hidden');

  viewPswdBtn.click()
  expect(pswdBox).toHaveAttr('type', 'password');
  expect(viewPswdBtn).toHaveAttr('alt', 'Password shown');
}

/*Description: verifies that forgot password button is present and has correct text on
the password page
Notes: 
Assumptions: */
export function verifyForgotPswdBtn(){
  goToPswdPg();
  let forgotPswdLink = $("a._2yI1vdIL-svQo6kjSRIz1r");
  forgotPswdLink.click();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  expect(emailBox).toExist();
  let resetBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  expect(resetBtn).toHaveText('Send Password Reset Link');
}

/*Description: verifies that back button is present and has correct text on
the password page
Notes: 
Assumptions: */
export function verifyPswdBackBtn(){
  goToPswdPg();
  let backBtn = $('a._291g2aF4hfA0TG1L1tmKiS');
  backBtn.click();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  expect(emailBox).toExist();
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  expect(contBtn).toHaveText('Continue');
}

/*Description: utility function for reachin the forgot password page*/
function goToForgotPswd(){
  goToPswdPg();
  let forgotPswdLink = $("a._2yI1vdIL-svQo6kjSRIz1r");
  forgotPswdLink.click();
}

/*Description: verifies that email box is present on the forgot password page
Notes: 
Assumptions: */
export function verifyResetEmailBox(){
  goToForgotPswd();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  expect(emailBox).toExist();
}

/*Description: verifies that submit button is present on the forgot password page
Notes: 
Assumptions: */
export function verifyResetSubmitBtn(){
  goToForgotPswd();
  let resetBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  expect(resetBtn).toHaveText('Send Password Reset Link');
}

/*Description: verifies that back button exists and navigates to login page on reset
password page
Notes: 
Assumptions: */
export function verifyResetBackBtn(){
  goToForgotPswd();
  let backBtn = $('a._291g2aF4hfA0TG1L1tmKiS');
  backBtn.click();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  expect(emailBox).toExist();
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  expect(contBtn).toHaveText('Continue');
}

