`yarn install` (requires node v14 or later)  
`yarn test`

NOTE:
I did not fully test the functionality of the continue button or the email text box on the forgot password page, because it was beginning to seem out of scope for the assessment, and I had already done so on the login page which seemed to show the same behavior. 

GENERAL ASSUMPTIONS:
-Login Page has not been visited previously in this environment, there is no user currently logged in.

-It is safe to test without fully resetting the browser for each test. I leave the state of cookies left by previous tests. Otherwise I would reset the browser after each test. 

-Identifiers for page elements would be sufficient for testing because they are unique enough to function in the provided scenario