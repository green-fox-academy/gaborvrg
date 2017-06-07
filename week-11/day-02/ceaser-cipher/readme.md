EXAM: Caesar Cipher

The Task

<!-- Create a web application that is able to decode encoded text with Caesar's Cipher. -->

<!-- Initialize a node package in this folder. -->

<!-- The FRONTEND should have one page consisting of the following: -->

<!-- A text area to place the encrypted text -->
<!-- A number input to specify the shift -->
<!-- A button to send the request and display the decoded message -->
<!-- A list of all previously decoded messages -->


The decryption should be done by a BACKEND service:

<!-- It should serve the HTML for the frontend -->
<!-- It should have a POST endpoint on the path: /decode: -->
<!-- It should expect an object as post data like:
  {
    "shift": 3,
    "text": "oruhp lsvxp groru vlw"
  } -->
<!-- It should respond with the following format (with 200 status code):
  {
    "status": "ok",
    "text": "lorem ipsum dolor sit"
  } -->

<!--   with 200 status code):?????? -->

It should accept a shift number between -25 and 25
It should only translate the the real letters (a-z and A-Z) (you can use the /[a-zA-Z]/ RegExp)

If any of the properties are missing of the post data or the shift is out of bound, it should respond with an error in the following format (with 400 status code):
  {
    "status": "error",
    "error": "Shift is out of bound"
  }
<!-- It should save the decoded text to a database -->


It should have a GET endpoint on the path: /decode/all:
It should respond with all the decoded text from the database in the following format:
 {
   "all": [
     "lorem ipsum dolor sit",
     "consectetur adipisicing elit",
     "ut labore et dolore magna aliqua"
   ]
 }

Other requirements:

You will need a database with one table to store all previously decoded messages. Plan the table and create the database.

<!-- The decryption unit should be in a separate file 
 -->
and it should be unit tested (it should not contain any express related code).
The frontend should write 'loading' while the XHR request is pending.
If the input is invalid, the frontend should alert the user.

