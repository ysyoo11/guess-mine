const timer = document.getElementById("jsTimer");

let sec = null;
let isPause = false;
let stopWatch;

const timeTick = () => {
  if (!isPause) {
    timer.innerHTML = sec;
    sec--;
  }
};

export const startTimer = () => {
  stopTimer();
  isPause = false;
  sec = 29;
  timeTick();
  stopWatch = setInterval(() => {
    timeTick();
    if (sec < 0) {
      clearInterval(stopWatch);
      timer.innerHTML = "Timeout";
    }
  }, 1000);
};

export const stopTimer = () => {
  clearInterval(stopWatch);
  timer.innerHTML = "0";
  // eslint-disable-next-line no-unused-vars
  isPause = true;
};
