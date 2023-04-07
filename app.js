const countdown = () => {
  const countToDate = new Date("Sept 21, 2024 00:00:00").getTime();
  const currentDateTime = new Date().getTime();
  const timeBetweenDates = countToDate - currentDateTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let dayToCountTo = Math.floor(timeBetweenDates / day);
  let hourToCountTo = Math.floor((timeBetweenDates % day) / hour);
  let minuteToCountTo = Math.floor((timeBetweenDates % hour) / minute);
  let secondToCountTo = Math.floor((timeBetweenDates % minute) / second);

  hourToCountTo = hourToCountTo < 10 ? "0" + hourToCountTo : hourToCountTo;
  minuteToCountTo =
    minuteToCountTo < 10 ? "0" + minuteToCountTo : minuteToCountTo;
  secondToCountTo =
    secondToCountTo < 10 ? "0" + secondToCountTo : secondToCountTo;

  document.querySelector(".days").innerText = dayToCountTo;
  document.querySelector(".hours").innerText = hourToCountTo;
  document.querySelector(".minutes").innerText = minuteToCountTo;
  document.querySelector(".seconds").innerText = secondToCountTo;
};

setInterval(countdown, 1000);
