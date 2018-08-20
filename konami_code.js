const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  console.log("== init ==");

  document.body.addEventListener('keydown', function() { onKeyDownHandler(event) }, false);

  let index = 0;

  function onKeyDownHandler(e) {
    console.log("== onKeyDownHandler ==");
    console.log("e.which:", e.which);
    console.log("e.location:", e.location);
    console.log("index:", index);
    console.log("code[index]:", code[index]);
    // let char = String.fromCharCode(e.which);
    // console.log("char:", char);

    if (e.which === code[index]) {
      console.log("MATCH!");
      index++;
    } else {
      console.log("NOPE!");
      alert("Missed one... reload and try again.");
    }
    if (index === code.length) {
      alert("You got it!");
    }
  }

}
