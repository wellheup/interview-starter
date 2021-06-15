export function open() {
  return browser.url("https://app.notarize.com/login");
}

export function verifyLoginTitle() {
  browser.url("https://app.notarize.com/login");
  expect(browser).toHaveTitle("Notarize | Login");
}

export function verifyHomeBtn(){
  browser.url("https://app.notarize.com/login");
  let homeBtn = $("a.YwjbjG5cqFpP4Hlhp4Zjv");
  expect(homeBtn).toHaveHref('https://www.notarize.com/');
  homeBtn.click();
  browser.switchWindow('Legally Notarize Your Documents Online. Anytime. Anywhere.')
  expect(browser).toHaveUrl('https://www.notarize.com/');
  browser.reloadSession();
}

export function verifySignUpLink(){
  browser.url("https://app.notarize.com/login");
  let signUpLink = $("a._291g2aF4hfA0TG1L1tmKiS");
  signUpLink.click();
  expect(browser).toHaveUrl('https://www.notarize.com/pricing');
}

export function verifyGoogleSignIn(){
  browser.url("https://app.notarize.com/login");
  let googleBtn = $("#google-signin-button");
  expect(googleBtn).toExist();

  googleBtn.click();
  browser.switchWindow('Sign in - Google Accounts')
  expect(browser).toHaveTitle('Sign in - Google Accounts');
  browser.reloadSession();
}

/*having not worked with iframes before, I'm not entirely sure how to test their 
  functionality. If I have time to return to this I will explore testing this feature
  further */
export function verifyNotarizeHelpBtn(){
  browser.url("https://app.notarize.com/login");
  let helpBtn = $('iframe, #launcher');
  expect(helpBtn).toExist();
}

export function noEmailWarn(){
  browser.url("https://app.notarize.com/login");
  let emailWarning = $("#field-error-message-id-email");
  expect(emailWarning).not.toExist();
}

export function emptyEmailAddr(){
<<<<<<< Updated upstream
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
=======
  browser.url("https://app.notarize.com/login");
  let emailBox = $("input[data-automation-id='email-field'], #email");
>>>>>>> Stashed changes
  //use all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  emailBox.clearValue("");
  expect(contBtn).toBeDisabled(); 
}

export function invalidEmailAddr(){
<<<<<<< Updated upstream
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
=======
  browser.url("https://app.notarize.com/login");
  let emailBox = $("input[data-automation-id='email-field'], #email");
>>>>>>> Stashed changes
  //use all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  emailBox.setValue("phillip.wellheuser");
  expect(contBtn).toBeDisabled(); 
}

// **this test attempts to test for the "Email appears to be invalid" message, but I 
// was unable to replicate this in the automated environment
export function inavalidEmailWarn(){
  browser.url("https://app.notarize.com/login");
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

export function requiredEmailWarn(){
  browser.url("https://app.notarize.com/login");
  let emailWarning = $("#field-error-message-id-email");
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
  expect(emailWarning).not.toExist();
  emailBox.setValue("phillip.wellheuser@gmail.com");
  emailBox.setValue("phillip.wellheuser@gmail.");
  expect(emailWarning).toHaveText('Email Is Required');
}

export function validEmailAddr(){
<<<<<<< Updated upstream
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
=======
  browser.url("https://app.notarize.com/login");
  let emailBox = $("input[data-automation-id='email-field'], #email");
>>>>>>> Stashed changes
  //use all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  emailBox.setValue("phillip.wellheuser@gmail.com");
  // expect(emailBox).not.toHaveValue();
  expect(contBtn).toBeEnabled(); 
}

<<<<<<< Updated upstream
export function validEmailContinue(){
  
}
=======
function goToPswdPg(){
  browser.url("https://app.notarize.com/login");
  
  //use all classes to identify button due to lack of unique identifiers
  let emailBox = $("input[data-automation-id='email-field'], #email");
  emailBox.setValue("phillip.wellheuser@gmail.com");

  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  contBtn.click();
}

export function validEmailCont(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  expect(pswdBox).toExist();
}

export function noPswdWarn(){
  goToPswdPg();

  let pswdWarn = $("#field-error-message-id-password");
  expect(pswdWarn).not.toExist();
}

export function emptyPswd(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  //use all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  pswdBox.clearValue();
  pswdBox.click();
  browser.keys('Tab');
  expect(contBtn).toBeDisabled();
}

export function emptyPswdWarn(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  //use all classes to identify button due to lack of unique identifiers
  pswdBox.clearValue();
  pswdBox.click();
  browser.keys('Tab');
  //check the error message below the password input box
  let pswdWarn = $("#field-error-message-id-password");
  expect(pswdWarn).toHaveText('Password Is Required');
}

export function invalidPswd(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  //use all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  pswdBox.setValue("wrongPassword");
  contBtn.click();
  expect(browser).toHaveTitle("Notarize | Login");
}
export function inavalidPswdWarn(){
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  //use all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  pswdBox.setValue("wrongPassword");
  contBtn.click();

  //check the warning below the continue button
  let contBtnWarn = $("p._2tb3vp5uEt7R6ZimSOFqlx");
  expect(contBtnWarn).toHaveText('* Email or password invalid');
}

export function validPswdCont(){
  browser.newWindow('https://app.notarize.com/login')
  goToPswdPg();

  let pswdBox = $("input[name='password'], #password");
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  pswdBox.setValue("qgC2y4@w7k9HBJ");
  contBtn.click();
  expect(browser).toHaveTitle("Notarize - Prepare Documents");
  //reload session to logout
  browser.reloadSession();
}

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

export function verifyForgotPswdBtn(){
  goToPswdPg();
  let forgotPswdLink = $("a._2yI1vdIL-svQo6kjSRIz1r");
  forgotPswdLink.click();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  expect(emailBox).toExist();
  let resetBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  expect(resetBtn).toHaveText('Send Password Reset Link');
}

export function verifyPswdBackBtn(){
  goToPswdPg();
  let backBtn = $('a._291g2aF4hfA0TG1L1tmKiS');
  backBtn.click();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  expect(emailBox).toExist();
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  expect(contBtn).toHaveText('Continue');
}

function goToForgotPswd(){
  goToPswdPg();
  let forgotPswdLink = $("a._2yI1vdIL-svQo6kjSRIz1r");
  forgotPswdLink.click();
}

export function verifyResetEmailBox(){
  goToForgotPswd();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  expect(emailBox).toExist();
}

export function verifyResetSubmitBtn(){
  goToForgotPswd();
  let resetBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  expect(resetBtn).toHaveText('Send Password Reset Link');
}

export function verifyResetBackBtn(){
  goToForgotPswd();
  let backBtn = $('a._291g2aF4hfA0TG1L1tmKiS');
  backBtn.click();
  let emailBox = $("input[data-automation-id='email-field'], #email");
  expect(emailBox).toExist();
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  expect(contBtn).toHaveText('Continue');
}

>>>>>>> Stashed changes
