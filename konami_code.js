const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  console.log("== init ==");

  document.body.addEventListener('keydown', function() { onKeyDownHandler(event) }, false);

  let index = 0;

  function onKeyDownHandler(e) {
    console.log("== onKeyDownHandler ==");
    console.log("e.which:", e.which);
    console.log("code[index]:", code[index]);

    if (e.which === code[index]) {
      index++;
    } else {
      console.log("NOPE!");
    }
  }

}
