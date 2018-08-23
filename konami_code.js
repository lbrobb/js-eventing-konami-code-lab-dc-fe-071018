const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler(e) {
    console.log("-- keydown --");
    let keyNumber = (e.detail || e.which);

    if (keyNumber === 38) {
      console.log("-- up --");
    }
  });
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0
    }
  })
};

init();
