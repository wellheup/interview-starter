export function open() {
  return browser.url("https://app.notarize.com/login");
}

export function verifyTitle() {
  browser.url("https://app.notarize.com/login");
  expect(browser).toHaveTitle("Notarize | Login");
}

export function verifyHomeButton(){
  let homeButton = $("a.YwjbjG5cqFpP4Hlhp4Zjv");
  expect(homeButton).toHaveHref('https://www.notarize.com/');
}

export function emptyEmailAddr(){
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
  let contBtn = $("input[name='email']");
  emailBox.clearValue("");
  browser.pause(1000);
  expect(contBtn).toBeDisabled(); 
}

export function invalidEmailAddr(){
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
  let contBtn = $("input[name='email']");
  emailBox.setValue("phillip.wellheuser");
  browser.pause(1000);
  expect(contBtn).toBeDisabled(); 
}

export function validEmailAddr(){
  let emailBox = $("._2-7En-hQFKdqE8IoOpDvfk");
  let contBtn = $("input[name='email']");
  emailBox.setValue("phillip.wellheuser@gmail.com");
  // expect(emailBox).toHaveAttrContaining('')
  expect(contBtn).toBeEnabled(); 
}
