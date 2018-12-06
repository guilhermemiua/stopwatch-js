function initChronometer() {
  const startTimer = document.querySelector('[data-timer="start"]');
  const pauseTimer = document.querySelector('[data-timer="pause"]');
  const restartTimer = document.querySelector('[data-timer="restart"]');
  const time = document.querySelector('[data-timer="time"]');

  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let timer;

  // Adding event listeners
  startTimer.addEventListener('click', play);
  pauseTimer.addEventListener('click', pause);
  restartTimer.addEventListener('click', restart);

  // Start/Continue stopwatch
  function play() {
    timer = setInterval(() => {
      time.innerText = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds++ : seconds++);
      if(seconds == 60) {
        minutes++;
        seconds = 0;
      }
      if(minutes == 60) {
        hours++;
        minutes = 0;
      }
    }, 1000);
    startTimer.setAttribute('disabled', '');
  };

  // Pause stopwatch
  function pause() {
    clearInterval(timer);
    startTimer.removeAttribute('disabled');
  };

  function restart() {
    clearInterval(timer);
    time.innerText = '00:00:00';
    i = 0;
  }
}

initChronometer();