const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const NewYears = "10 Feb 2024";

function countdown() {
  const newYeardate = new Date(NewYears);
  const currentDate = new Date();

  //secont , days
  const Totalseconds = (newYeardate - currentDate) / 1000;
  const days = Math.floor(Totalseconds / 3600 / 24);
  const hours = Math.floor((Totalseconds / 3600) % 24);
  const minnutes = Math.floor((Totalseconds / 60) % 24) % 60;
  const seconds = Math.floor(Totalseconds) % 60;

  //fullfil desktop

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = minnutes;
  secondsEl.innerHTML = seconds;
}

//set interval initial call

countdown();
setInterval(countdown, 1000);
