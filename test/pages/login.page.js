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
  /*The intention here is to check the new tab opened upon clicking
    the home button, however I was not familiar enough with webdriver and selenium
    to figure out how to access the tab in reasonable time. I had thought at first,
    that there may be a race condition when getting window handles, thus the
    implementation of the promise */
  // homeBtn.click();
  // const myPromise = new Promise((resolve, reject) => {
  //   resolve(browser.getWindowHandles());
  // });
  
  // myPromise.then((resolve)=>{browser.switchWindow(resolve[1]);})
  //   .then(()=>{console.log("WE DID IT");})
  //   .then(()=>{expect(browser).toHaveUrl('https://www.notarize.com/');})
  //   .then(()=>{browser.closeWindow()})
  //   .catch(console.log("FAILED"));
}

export function verifySignUpLink(){
  let signUpLink = $("a._291g2aF4hfA0TG1L1tmKiS");
  signUpLink.click();
  expect(browser).toHaveUrl('https://www.notarize.com/pricing');
  browser.url("https://app.notarize.com/login");
}

export function verifyGoogleSignIn(){
  let googleBtn = $("#google-signin-button");
  expect(googleBtn).toExist();
  /*similarly to verifying the home button functionality, I was not familiar enough
    with selenium or webdriver to figure out how to switch to the new window to 
    verify that it was the correct google login window*/
  // googleBtn.click();
  // expect(browser).toHaveTitle('Sign in - Google Accounts');
  // browser.closeWindow();
}

export function verifyNotarizeHelpBtn(){
  /*having not worked with iframes before, I'm not entirely sure how to test their 
    functionality. If I have time to return to this I will explore testing this feature
    further */
  let helpBtn = $('iframe, #launcher');
  expect(helpBtn).toExist();
}

export function noEmailWarn(){
  browser.url("https://app.notarize.com/login");
  let emailWarning = $("#field-error-message-id-email");
  expect(emailWarning).not.toExist();
}

export function emptyEmailAddr(){
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
  //use all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  emailBox.clearValue("");
  expect(contBtn).toBeDisabled(); 
}

export function invalidEmailAddr(){
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
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
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
  //use all classes to identify button due to lack of unique identifiers
  let contBtn = $("button[class='CoreButton Button is-large is-fullwidth active-darken hover-darken Button-action']");
  emailBox.setValue("phillip.wellheuser@gmail.com");
  // expect(emailBox).not.toHaveValue();
  expect(contBtn).toBeEnabled(); 
}

export function validEmailContinue(){
  
}