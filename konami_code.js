const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  console.log("== init ==");
  console.log("document.body:", document.body);
  document.body.addEventListener("keydown", function() {
    console.log("== keydown ==");
  });

}
