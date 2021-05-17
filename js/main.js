const STOPWATCH = document.querySelector('.stopwatch');
const TEXTAREA = document.querySelector('textarea');
const TESTTEXT = document.querySelector('article p')
const BUTTON = document.querySelector('button')

var stopwatch = new Stopwatch(STOPWATCH, 100);
var timerRunning = false;
var resetClicked = false;
var textEntered;
var textEnteredLength;

function start() {
  textEnteredLength = TEXTAREA.value.length;
  if (textEnteredLength === 0 && !timerRunning) {
      timerRunning = true;
      stopwatch.start();
      resetClicked= false;
  };
}

function stop() {
  if (textEntered === TESTTEXT.textContent) {
    stopwatch.stop();
  }
}

function reset() {
  if (timerRunning) {
    stopwatch.stop();
    stopwatch.reset();
    TEXTAREA.value = "";
    TEXTAREA.style.borderColor = "";
    timerRunning = false;
    resetClicked= true;
  }
}

function spellChecker() {
  if (!resetClicked) {
    textEntered = TEXTAREA.value;
    let originTextMatch = TESTTEXT.textContent.substring(0, textEntered.length);

    if (textEntered == TESTTEXT.textContent) {
        TEXTAREA.style.borderColor = "#2A9D8F";
    } else {
        if (textEntered == originTextMatch) {
              TEXTAREA.style.borderColor = "#65CCf3";
        } else {
              TEXTAREA.style.borderColor = "#E95D0F";
        }
    }
  }
}


TEXTAREA.addEventListener("keypress", start, false);
TEXTAREA.addEventListener("keyup", spellChecker, false);
TEXTAREA.addEventListener("keyup", stop, false);
BUTTON.addEventListener("click", reset, false);



// stopwatch.stop();
// stopwatch.reset();
