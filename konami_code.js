const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] // konami!

function init() {
  let index = 0; // tells index of keystrokes to start at 0
  let bodyEl = document.getElementsByTagName("body"); // defines the area where we want to track keystrokes
  console.log("bodyEl:", bodyEl);
  bodyEl[0].addEventListener('keydown', onKeyDownHandler); // adds listener for keystrokes

  function onKeyDownHandler(e) { // defines function for handling the keystroke sequence
    console.log("== onKeyDownHandler ==");
    let keyNumber = (e.detail || e.which); // tells function to use the conversion from "up key" to "38"
  };

  function onKeyDownHandler(e) { // don't know why I did this twice, but it passed and I'm afraid to change it
    const key = parseInt(e.detail || e.which); // magic
    if (key === code[index]) { // code is the array defined above
      index++; // adds to the tracker of correct keystrokes in sequence
      if (index === code.length) { // tells us we have completed the full array
        alert("Hurray!"); // whee!
        index = 0; // resets the counter back to the beginning
      }
    } else {
      index = 0 // wrong keystroke starts back to beginning of index
    }
  }
};

init();
