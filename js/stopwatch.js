
function Stopwatch(elem, delay){
  var time = 0;
  var interval;
  var offset;

  function update() {
    if (this.isOn){
      time += delta();
    };
    var formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
  }

  function delta(){
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {

    function padZero(digit) {
      return digit < 10 ? '0' + digit : '' + digit;
    }

    const minutes = padZero(timeInMilliseconds / 60000 | 0);
    const seconds = padZero((timeInMilliseconds / 1000 | 0) % 60);
    const centiseconds = padZero((timeInMilliseconds / 10 | 0) % 100);

    var formattedTime = minutes + ":" + seconds + ":" + centiseconds;

    return formattedTime;

  }

  this.isOn = false;

  this.start = function() {
    if (!this.isOn) {
      interval= setInterval(update.bind(this), delay);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function() {
      time = 0;
      update();
  };
}

// var watch = new Stopwatch();
// watch.start();
// stopwatch.stop()
